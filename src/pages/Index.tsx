import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TimeSavings } from "@/components/TimeSavings";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main id="conteudo-principal" className="min-h-screen bg-background" role="main">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TimeSavings />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
