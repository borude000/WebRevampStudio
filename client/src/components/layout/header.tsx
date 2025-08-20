import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';
import { trackEvent } from '@/lib/analytics';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    trackEvent('mobile_menu_toggle', 'navigation', isMobileMenuOpen ? 'close' : 'open');
  };

  const handleSkipToContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <button
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </button>

      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <nav className="container mx-auto px-4 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-sora font-bold text-xl text-dark">
                WebRevamp<span className="text-primary">Studio</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location === item.href
                        ? 'text-primary'
                        : 'text-gray-text hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <CTAButton
                href="/contact"
                size="sm"
                eventLabel="header_cta"
              >
                Get Free Audit
              </CTAButton>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={handleMobileMenuToggle}
                className="text-gray-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary p-2 rounded-lg"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      location === item.href
                        ? 'text-primary'
                        : 'text-gray-text hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <CTAButton
                    href="/contact"
                    className="w-full"
                    eventLabel="mobile_header_cta"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Audit
                  </CTAButton>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
