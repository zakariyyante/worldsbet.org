import Link from "next/link";
import Image from "next/image";

export default function Disclaimer() {
  return (
    <div className="bg-black/60 border-y border-teal-900/20 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <Image src="/18plus.svg" alt="18+" width={32} height={32} />
          <span className="font-black text-gray-400 uppercase tracking-widest text-xs">Adults 18+ Only</span>
        </div>
        <div className="h-px w-12 bg-teal-900/30 hidden md:block"></div>
        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider max-w-4xl leading-relaxed">
          Betting should be a championship experience, not a burden. For elite support, visit{" "}
          <Link href="https://www.begambleaware.org" className="text-[#00d4ff] hover:underline" target="_blank">
            BeGambleAware.org
          </Link>{" "}
          or call 0808 8020 133. All promotions are subject to rigorous terms and conditions.
        </p>
      </div>
    </div>
  );
}
