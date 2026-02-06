'use client';

import { useState } from 'react';

export function HeroImage() {
  const [imgSrc, setImgSrc] = useState('/images/escalade-hero.png');
  const fallbackSrc = 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&h=900&fit=crop&q=90';

  return (
    <div className="relative aspect-video">
      <img
        src={imgSrc}
        alt="2025 Cadillac Escalade - Premium VIP Transportation"
        className="w-full h-full object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5"
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
    </div>
  );
}
