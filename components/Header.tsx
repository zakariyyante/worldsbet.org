"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050b14]/95 backdrop-blur-md border-b border-teal-900/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="WorldsBet Logo" 
            width={220} 
            height={55} 
            priority 
            className="teal-glow"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:text-[#00d4ff] transition-colors">Home</Link>
          <Link href="/disclosure" className="text-sm font-bold uppercase tracking-widest hover:text-[#00d4ff] transition-colors">Disclosure</Link>
          <Link href="#guide" className="text-sm font-bold uppercase tracking-widest hover:text-[#00d4ff] transition-colors">Guide</Link>
          <Link href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-[#00d4ff] transition-colors">About</Link>
          <Link href="#contact" className="text-sm font-bold uppercase tracking-widest hover:text-[#00d4ff] transition-colors">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden text-[#00d4ff]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a1628] border-b border-teal-900/30 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest">Home</Link>
          <Link href="/disclosure" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest">Disclosure</Link>
          <Link href="#guide" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest">Guide</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest">About</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest">Contact</Link>
        </div>
      )}
    </header>
  );
}
