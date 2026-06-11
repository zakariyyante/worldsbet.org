"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Image from "next/image";

interface MobileModalProps {
  brands: Brand[];
}

export default function MobileModal({ brands }: MobileModalProps) {
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const gclid = searchParams.get("gclid");

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const mobileBrandsExist = brands.some(b => b.isMobile);
    
    if (gclid && isMobile && mobileBrandsExist) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [gclid, brands]);

  if (!showModal) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050b14] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-12">
          <Image src="/logo.png" alt="WorldsBet" width={160} height={40} className="teal-glow" />
          <button 
            onClick={() => {
              setShowModal(false);
              document.body.style.overflow = "unset";
            }}
            className="text-[#00d4ff] p-2 hover:scale-110 transition-transform"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-teal-500/10 border border-teal-500/30 text-[#00d4ff] text-[10px] font-black uppercase tracking-widest">
            Mobile Exclusive
          </div>
          <h2 className="text-4xl font-black mb-4 uppercase italic tracking-tighter">
            Elite <span className="teal-text">Mobile</span> Access
          </h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Championship offers for your device.</p>
        </div>

        <div className="flex flex-col gap-6 mb-16">
          {mobileBrands.map((brand, idx) => (
            <BrandCard key={brand.id} brand={brand} rank={idx + 1} gclid={gclid || undefined} />
          ))}
        </div>

        <div className="text-center pb-12 border-t border-white/5 pt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image src="/18plus.svg" alt="18+" width={30} height={30} />
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Play Responsibly</span>
          </div>
          <p className="text-[9px] font-bold text-gray-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} WORLDSBET.ORG // T&CS APPLY
          </p>
        </div>
      </div>
    </div>
  );
}
