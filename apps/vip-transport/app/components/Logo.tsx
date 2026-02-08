
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

        {/* Iteration 7: Playfair Serif Monogram with Realistic Gold */}
        <svg viewBox="0 0 100 100" className={`${currentSize.iconInner} relative z-20 overflow-visible`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Realistic Metallic Gold Gradient */}
            <linearGradient id="luxuryGold" x1="10%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#FDE68A" />   {/* Lightest Gold */}
              <stop offset="25%" stopColor="#D97706" />  {/* Darker Amber */}
              <stop offset="50%" stopColor="#F59E0B" />  {/* Standard Amber */}
              <stop offset="75%" stopColor="#92400E" />  {/* Deep Shadow */}
              <stop offset="100%" stopColor="#FDE68A" /> {/* Lightest Highlight */}
            </linearGradient>

            {/* Inner Shadow for depth */}
            <filter id="insetShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="3" />
              <feOffset dx="2" dy="2" result="offsetblur" />
              <feFlood floodColor="#92400E" result="color" />
              <feComposite in2="offsetblur" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
              </feMerge>
            </filter>

            {/* Outline Shine */}
            <filter id="glow">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#FDE68A" floodOpacity="0.4" />
            </filter>
          </defs>

          <g style={{ fontFamily: 'var(--font-playfair), serif' }} fontWeight="bold" fill="url(#luxuryGold)" filter="url(#glow)">
            {/* Re-render M fill without stroke to cover overlaps cleanly */}
            <text x="30" y="78" fontSize="88" textAnchor="middle">M</text>
            {/* The 'L' - Left Base */}
            <text x="50" y="95" fontSize="72" textAnchor="middle">L</text>

            {/* The 'S' - Right Base */}
            <text x="80" y="105" fontSize="72" textAnchor="middle">S</text>
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
