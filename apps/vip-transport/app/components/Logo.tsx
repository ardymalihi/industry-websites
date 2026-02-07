
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
    : 'bg-[#fbbf24] bg-clip-text text-transparent';

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon - Replace this div with your logo image */}
      <div className={`${currentSize.icon.replace('w-', 'min-w-')} px-2 relative flex items-center justify-center group/logo`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[#fbbf24] rounded-lg transform transition-transform duration-500 group-hover/logo:rotate-12 group-hover/logo:scale-110"></div>
        <div className="absolute inset-[2px] bg-black rounded-lg z-10"></div>

        {/* Iteration 5: Simple Horizontal MLS Display - Maximum clarity */}
        <div className="relative z-20 flex items-center justify-center font-bold tracking-tighter text-[#fbbf24] drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
          <span className="text-[1.2rem] leading-none">M</span>
          <span className="text-[1.2rem] leading-none">L</span>
          <span className="text-[1.2rem] leading-none">S</span>
        </div>
      </div>
      {showText && (
        <span className={`${currentSize.text} font-bold ${textColor}`}>
          Executive Car Service
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
