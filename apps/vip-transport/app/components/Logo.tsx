import { Car } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({
  className = '',
  showText = true,
  variant = 'light',
  size = 'md'
}: LogoProps) {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', iconInner: 'w-5 h-5', text: 'text-xl' },
    md: { icon: 'w-10 h-10', iconInner: 'w-6 h-6', text: 'text-2xl' },
    lg: { icon: 'w-12 h-12', iconInner: 'w-8 h-8', text: 'text-3xl' },
  };

  const currentSize = sizeClasses[size];
  const textColor = variant === 'dark'
    ? 'text-white'
    : 'bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent';

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon - Replace this div with your logo image */}
      <div className={`${currentSize.icon} bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center`}>
        <Car className={`${currentSize.iconInner} text-white`} />
        {/* To use your own logo image, replace the Car icon above with: */}
        {/* <img src="/logo.png" alt="MLS Executive Car Service" className="w-full h-full object-contain" /> */}
      </div>
      {showText && (
        <span className={`${currentSize.text} font-bold ${textColor}`}>
          MLS Executive Car Service
        </span>
      )}
    </div>
  );
}

/**
 * LOGO REPLACEMENT GUIDE:
 * 
 * 1. Replace the logo icon:
 *    - Option A: Replace the Car icon with your logo image
 *      <img src="/logo.png" alt="Company Name" className="w-full h-full object-contain" />
 *    
 *    - Option B: Use an SVG logo
 *      <YourLogoSVG className="w-full h-full" />
 * 
 * 2. Update company name:
 *    - Search and replace "MLS Executive Car Service" throughout the codebase
 *    - Update in: page.tsx, layout.tsx (metadata), and this file
 * 
 * 3. Update brand colors:
 *    - Current: amber-500/600/700/800
 *    - Update in: tailwind.config.js and throughout component classes
 * 
 * 4. Logo file location:
 *    - Place logo in: apps/vip-transport/public/logo.png
 *    - Or use external URL in the img src
 */
