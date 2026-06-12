"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  rank?: number;
  gclid?: string;
}

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export default function BrandCard({ brand, rank, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return `${url}${gclidValue}`;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const finalUrl = buildUrl(brand.url, gclid);
    track("Brand Click", { brand: brand.name });
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, "_blank");
    }
  };

  const getRankBadge = (rank?: number) => {
    if (rank === 1) return <div className="absolute top-0 left-0 bg-[#d4af37] text-black text-[10px] font-black px-4 py-1 uppercase tracking-tighter z-10 rounded-br-xl">#1 WORLD CLASS</div>;
    if (rank === 2) return <div className="absolute top-0 left-0 bg-gray-400 text-black text-[10px] font-black px-4 py-1 uppercase tracking-tighter z-10 rounded-br-xl">#2 ELITE TIER</div>;
    if (rank === 3) return <div className="absolute top-0 left-0 bg-[#cd7f32] text-black text-[10px] font-black px-4 py-1 uppercase tracking-tighter z-10 rounded-br-xl">#3 PRO CHOICE</div>;
    return null;
  };

  return (
    <div 
      onClick={handleCardClick}
      className="sports-card-bg rounded-2xl p-8 relative flex flex-col gap-8 cursor-pointer group stadium-glow overflow-hidden gold-shimmer"
    >
      {getRankBadge(rank)}
      
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 -rotate-45 translate-x-12 -translate-y-12 group-hover:bg-teal-500/10 transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>

      {/* Top Section: Logo & Rating */}
      <div className="flex items-center justify-between gap-6">
        <div className="relative w-36 h-20 bg-black/40 rounded-xl p-3 flex items-center justify-center border border-teal-900/20 group-hover:border-teal-400/30 transition-all duration-500">
          <Image 
            src={brand.logo} 
            alt={brand.name} 
            fill 
            className="object-contain p-3 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col items-end">
          <div className="text-4xl font-black italic text-[#00d4ff] leading-none mb-1">{brand.rating.toFixed(1)}</div>
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(brand.rating / 2) ? "text-[#d4af37] fill-[#d4af37]" : "text-gray-700"}`} 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{brand.votes} REVIEWS</span>
        </div>
      </div>

      {/* Middle Section: Bonus */}
      <div className="flex-1">
        <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] mb-2">{brand.name}</h3>
        <p className="text-2xl font-black uppercase italic leading-tight group-hover:text-[#00d4ff] transition-colors duration-300">
          {brand.bonus}
        </p>
      </div>
      
      {/* Bottom Section: CTA */}
      <button className="w-full py-4 bg-gradient-to-r from-[#008080] to-[#00d4ff] hover:from-[#00d4ff] hover:to-[#00f2ff] text-black font-black uppercase italic tracking-widest rounded-xl transition-all transform group-hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
        Claim Victory
      </button>
    </div>
  );
}
