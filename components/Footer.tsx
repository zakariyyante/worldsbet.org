import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[#03070d] pt-24 pb-12 border-t border-teal-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          <Image 
            src="/logo.png" 
            alt="WorldsBet Logo" 
            width={280} 
            height={70} 
            className="mb-12 teal-glow" 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left w-full max-w-5xl">
            <div className="flex flex-col gap-5">
              <h4 className="font-black text-[#00d4ff] uppercase text-xs tracking-[0.3em]">Network</h4>
              <Link href="/" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">Home</Link>
              <Link href="#brands" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">Top Brands</Link>
              <Link href="#guide" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">Pro Guide</Link>
            </div>
            
            <div className="flex flex-col gap-5">
              <h4 className="font-black text-[#00d4ff] uppercase text-xs tracking-[0.3em]">Legal</h4>
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">Terms</Link>
              <Link href="/disclosure" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">Disclosure</Link>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="font-black text-[#00d4ff] uppercase text-xs tracking-[0.3em]">Support</h4>
              <Link href="#contact" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">Contact</Link>
              <Link href="#faq" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">FAQs</Link>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="font-black text-[#00d4ff] uppercase text-xs tracking-[0.3em]">Resources</h4>
              <a href="https://www.begambleaware.org" target="_blank" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">Responsible</a>
              <a href="https://www.gamblingcommission.gov.uk/" target="_blank" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase">UKGC</a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16 px-6">
          <p className="text-[10px] text-gray-600 leading-relaxed font-bold uppercase tracking-wider">
            WorldsBet.org is an independent comparison platform. We operate with full transparency and may receive compensation from featured partners. This does not compromise our rigorous review standards. Regulated by UKGC affiliate guidelines.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <Image src="/gamestop.png" alt="GAMSTOP" width={120} height={30} className="object-contain" />
          <Image src="/gamcare.png" alt="GamCare" width={120} height={30} className="object-contain" />
          <Image src="/gambleaware.png" alt="BeGambleAware" width={140} height={30} className="object-contain" />
        </div>

        <div className="text-center border-t border-white/5 pt-10">
          <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">
            &copy; {year} WORLDSBET.ORG // ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
