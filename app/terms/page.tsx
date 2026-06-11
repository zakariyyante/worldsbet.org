import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase italic tracking-tighter">
          Terms of <span className="teal-text">Service</span>
        </h1>
        <div className="prose prose-invert max-w-none text-gray-400 space-y-8 font-medium leading-relaxed">
          <p className="text-lg">
            By accessing WorldsBet.org, you agree to comply with and be bound by the following terms and conditions. If you do not agree, please refrain from using our website.
          </p>
          
          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">1. Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, and logos, is the property of WorldsBet.org and protected by copyright laws. Unauthorized use or reproduction is strictly prohibited.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">2. User Eligibility</h2>
          <p>
            You must be at least 18 years of age (or the legal gambling age in your jurisdiction) to use this website. By using WorldsBet.org, you represent that you meet these age requirements.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">3. Limitation of Liability</h2>
          <p>
            WorldsBet.org provides information for entertainment purposes only. We are not responsible for any financial losses incurred on third-party betting sites. Users are encouraged to gamble responsibly.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">4. Governing Law</h2>
          <p>
            These terms are governed by the laws of the United Kingdom. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the UK courts.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
