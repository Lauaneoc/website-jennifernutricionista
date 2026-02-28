import { About } from "../sections/about";
import { CaresMethod } from "../sections/cares-method";
import { FinalCTA } from "../sections/final-cta";
import { Footer } from "../sections/footer";
import { Hero } from "../sections/hero";
import { Locations } from "../sections/locations";
import { Navigation } from "../sections/navigations";
import { PricingPlans } from "../sections/pricing-plans";
import { Testimonials } from "../sections/testimonials";
import { WhatsAppFloatButton } from "../components/whatsapp-float-button";

export default function ProtocoloEllaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WhatsAppFloatButton />
      <div className="pt-16 md:pt-20">
        <Hero />
        <Testimonials />
        <About />
        <PricingPlans />
        <Locations />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
