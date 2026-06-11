import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AffiliateDisclosure() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase italic tracking-tighter">
          Affiliate <span className="teal-text">Disclosure</span>
        </h1>
        <div className="prose prose-invert max-w-none text-gray-400 space-y-8 font-medium leading-relaxed">
          <p className="text-lg">
            In compliance with the Federal Trade Commission (FTC) guidelines and UK advertising standards, WorldsBet.org provides this disclosure regarding our relationships with the brands featured on this website.
          </p>
          
          <div className="bg-[#0a1628] p-8 rounded-3xl border border-teal-900/30 stadium-glow">
            <h2 className="text-2xl font-black text-white mb-4 uppercase italic">How We Operate</h2>
            <p>
              WorldsBet.org is an independent comparison website supported by affiliate commissions. When you click on a link to a betting site or casino featured on our platform and subsequently create an account or make a deposit, we may receive a commission from that operator.
            </p>
          </div>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">Integrity & Transparency</h2>
          <p>
            Our primary goal is to provide accurate, up-to-date, and objective information to help you make informed decisions. While we receive compensation, this does not influence our rigorous review process or the integrity of our ratings. Our experts evaluate each platform based on strict criteria, including:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-[#00d4ff]">
            <li className="text-gray-400"><span className="font-bold">Licensing & Regulation:</span> We only feature platforms regulated by the UK Gambling Commission (UKGC) or equivalent reputable bodies.</li>
            <li className="text-gray-400"><span className="font-bold">Security:</span> Verification of SSL encryption and data protection protocols.</li>
            <li className="text-gray-400"><span className="font-bold">User Experience:</span> Testing mobile responsiveness and interface quality.</li>
            <li className="text-gray-400"><span className="font-bold">Payout Speed:</span> Auditing the reliability and speed of withdrawals.</li>
          </ul>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">No Cost to You</h2>
          <p>
            The commissions we receive come at no additional cost to you. In many cases, our relationships with these operators allow us to negotiate exclusive bonuses and offers that you might not find elsewhere.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">Responsible Gambling</h2>
          <p>
            We remind our users that gambling should be treated as a form of entertainment. We only partner with operators who demonstrate a strong commitment to responsible gambling practices. If you feel you may have a gambling problem, please seek help from professional organizations like GamCare or BeGambleAware.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
