export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#050b14]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase italic tracking-tighter">
          The <span className="teal-text">WorldsBet</span> Standard
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why Our Reviews Stand Out */}
          <div className="bg-[#0a1628] p-10 rounded-3xl border border-teal-900/30 stadium-glow">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase italic">
              <span className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-[#00d4ff]">01</span>
              Elite Review Protocol
            </h3>
            <ul className="space-y-6">
              {[
                "UKGC Regulatory Compliance Audit",
                "Real-Time Odds & Bonus Verification",
                "High-Stakes Withdrawal Stress Tests",
                "Mobile Performance Benchmarking",
                "Direct Support Channel Verification"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-400 font-bold uppercase text-sm tracking-wide">
                  <span className="text-[#00d4ff]">▶</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Responsible Gambling */}
          <div className="bg-[#0a1628] p-10 rounded-3xl border border-teal-900/30 stadium-glow">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase italic">
              <span className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-[#00d4ff]">02</span>
              Player Safety First
            </h3>
            <p className="text-gray-400 mb-10 leading-relaxed font-medium">
              We advocate for responsible sports entertainment. Betting is a game of skill and chance, not a financial solution. Maintain control and play within your limits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="https://www.gamstop.co.uk" target="_blank" className="px-4 py-3 bg-teal-500/5 hover:bg-teal-500/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-center transition-all border border-teal-900/20">GAMSTOP</a>
              <a href="https://www.gamcare.org.uk" target="_blank" className="px-4 py-3 bg-teal-500/5 hover:bg-teal-500/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-center transition-all border border-teal-900/20">GamCare</a>
              <a href="https://www.begambleaware.org" target="_blank" className="px-4 py-3 bg-teal-500/5 hover:bg-teal-500/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-center transition-all border border-teal-900/20">BeGambleAware</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
