'use client';

import { useState } from 'react';

export function HeroImage() {
  const [imgSrc, setImgSrc] = useState('/images/escalade-hero.png');
  const fallbackSrc = 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&h=900&fit=crop&q=90';

  return (
    <div className="relative aspect-video transition-all duration-700 group-hover:scale-105">
      {/* Headlight Glows - Left (Perfect mirror of Right params, offset left) */}
      <div className="absolute left-[4%] top-[41%] w-10 h-16 bg-white/30 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      <div className="absolute left-[4%] top-[42%] w-3 h-10 bg-blue-100/50 blur-[12px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

      {/* Headlight Glows - Right */}
      <div className="absolute left-[34%] top-[41%] w-10 h-16 bg-white/30 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      <div className="absolute left-[34%] top-[42%] w-3 h-10 bg-blue-100/50 blur-[12px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

      <img
        src={imgSrc}
        alt="2025 Cadillac Escalade - Premium VIP Transportation"
        className="w-full h-full object-cover rounded-2xl"
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
    </div>
  );
}
