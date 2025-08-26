import { Link } from 'wouter';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle 
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website Redesign', href: '/services#redesign' },
    { name: 'Responsive Development', href: '/services#development' },
    { name: 'Performance & SEO', href: '/services#seo' },
    { name: 'Maintenance Plans', href: '/services#maintenance' },
    { name: 'System Integrations', href: '/services#integrations' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const contactInfo = {
    email: 'hello.forcontactus@gmail.com',
    phone: '+91 8087949226',
    location: 'Pune, India',
    whatsapp: '918087949226'
  };

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="font-sora font-bold text-xl mb-4">
              WebRevamp<span className="text-primary">Studio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Modern website redesigns for growing businesses across India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/nikhil-borude-b6a4ba266/" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              {/* <a 
                href="https://twitter.com/webrevampstudio" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a> */}
              <a 
                href="https://www.instagram.com/nikkkhil_000/" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-sora font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-sora font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-sora font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-success hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mt-4"
            >
              <MessageCircle className="mr-2" size={16} />
              WhatsApp
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} WebRevamp Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
