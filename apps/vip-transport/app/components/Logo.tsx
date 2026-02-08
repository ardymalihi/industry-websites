
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
    sm: { icon: 'w-10 h-10', iconInner: 'w-7 h-7', text: 'text-2xl' },
    md: { icon: 'w-14 h-14', iconInner: 'w-10 h-10', text: 'text-3xl' },
    lg: { icon: 'w-20 h-20', iconInner: 'w-14 h-14', text: 'text-4xl' },
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

        {/* Iteration 8: Simplfied Playfair Serif Monogram - Flat Color, No Effects */}
        <svg viewBox="0 0 100 100" className={`${currentSize.iconInner} relative z-20 overflow-visible`} xmlns="http://www.w3.org/2000/svg">
          <g style={{ fontFamily: 'var(--font-playfair), serif' }} fontWeight="bold" fill="#fbbf24" stroke="#B45309" strokeWidth="1.5">
            {/* The 'S' - Right Base (Bottom Layer) */}
            <text x="80" y="105" fontSize="72" textAnchor="middle">S</text>

            {/* The 'L' - Left Base (Middle Layer) */}
            <text x="48" y="92" fontSize="72" textAnchor="middle">L</text>

            {/* The 'M' - Center Top Overlay (Top Layer) */}
            <text x="30" y="78" fontSize="88" textAnchor="middle" strokeWidth="2" paintOrder="stroke">M</text>
          </g>
        </svg>
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
