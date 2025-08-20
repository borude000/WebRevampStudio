import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  eventLabel?: string;
  icon?: React.ReactNode;
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  eventLabel,
  icon,
  ...props
}: CTAButtonProps) {
  
  const handleClick = () => {
    if (eventLabel) {
      trackEvent('cta_click', 'engagement', eventLabel);
    }
    if (onClick) onClick();
    if (href) {
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    }
  };

  const baseClasses = "font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-primary hover:bg-blue-700 text-white shadow-lg",
    secondary: "bg-white hover:bg-gray-50 text-dark border-2 border-gray-200 hover:border-primary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl", 
    lg: "px-8 py-4 text-lg rounded-2xl"
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
}
