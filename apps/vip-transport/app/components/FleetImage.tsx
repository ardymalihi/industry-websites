'use client';

import { useState } from 'react';

interface FleetImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export function FleetImage({ src, alt, fallback, className }: FleetImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const defaultFallback = 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop&q=90';

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`w-full h-full object-cover transition-transform duration-500 ${className || ''}`}
      onError={() => {
        setImgSrc(fallback || defaultFallback);
      }}
    />
  );
}
