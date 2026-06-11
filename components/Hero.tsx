import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-teal-500/10 border border-teal-500/30 text-[#00d4ff] text-xs md:text-sm font-black uppercase tracking-[0.2em]">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></span>
          UK&apos;s Elite Betting Network 2026
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
          Master The <span className="teal-text">Game</span> <br />
          Claim The <span className="gold-text">World</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          Expert-vetted platforms, championship-level bonuses, and lightning-fast payouts. Your journey to the top starts here.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:border-[#00d4ff] transition-all duration-300 transform group-hover:-translate-y-1">
              <Image src="/check-icon.svg" alt="Licensed" width={32} height={32} className="teal-glow" />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs text-gray-500">Licensed</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:border-[#00d4ff] transition-all duration-300 transform group-hover:-translate-y-1">
              <Image src="/shield-icon.svg" alt="Expert Approved" width={32} height={32} className="teal-glow" />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs text-gray-500">Verified</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:border-[#00d4ff] transition-all duration-300 transform group-hover:-translate-y-1">
              <Image src="/money-icon.svg" alt="Quick Withdrawals" width={32} height={32} className="teal-glow" />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs text-gray-500">Fast Pay</span>
          </div>
        </div>
      </div>
    </section>
  );
}
