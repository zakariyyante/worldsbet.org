import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase italic tracking-tighter">
          Privacy <span className="teal-text">Policy</span>
        </h1>
        <div className="prose prose-invert max-w-none text-gray-400 space-y-8 font-medium leading-relaxed">
          <p className="text-lg">
            At WorldsBet.org, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal data in accordance with the UK General Data Protection Regulation (UK GDPR).
          </p>
          
          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">1. Data Collection</h2>
          <p>
            We may collect technical data such as your IP address, browser type, and device information to improve our services and user experience. We do not collect sensitive personal information unless explicitly provided by you (e.g., via contact forms).
          </p>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">2. Use of Cookies</h2>
          <p>
            We use cookies to personalize content, analyze traffic, and track affiliate referrals. You can manage your cookie preferences through your browser settings at any time.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">3. Affiliate Links & Third Parties</h2>
          <p>
            Our website contains links to third-party betting sites. When you click these links, you are redirected to platforms with their own privacy policies. We encourage you to review those policies as we do not control their data practices.
          </p>

          <h2 className="text-2xl font-black text-white mt-12 uppercase italic">4. Your Rights</h2>
          <p>
            Under UK GDPR, you have the right to access, rectify, or erase your personal data held by us. For any inquiries, please contact our data protection team.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
