import { brands } from "./data/brands";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import Disclaimer from "@/components/Disclaimer";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import MobileModal from "@/components/MobileModal";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = params.gclid;
  const mainBrands = brands.filter(brand => !brand.isMobile);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      <Hero />
      
      <section id="brands" className="py-12 bg-black/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {mainBrands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                rank={index + 1} 
                gclid={gclid}
              />
            ))}
          </div>
        </div>
      </section>

      <Disclaimer />
      
      <AboutSection />
      
      <Footer />

      <Suspense fallback={null}>
        <MobileModal brands={brands} />
      </Suspense>
    </main>
  );
}
