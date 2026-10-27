import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ServicesGrid } from "@/components/services-grid";
import { PreviewCardsSection } from "@/components/preview-cards";
import { HomepageServiceArea } from "@/components/homepage-service-area";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema } from "@/lib/schema";

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={localBusinessSchema()} />
      <Header />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <PreviewCardsSection />
      <HomepageServiceArea />
      <Footer />
    </main>
  );
}
