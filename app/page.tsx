import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Cta from "@/components/cta";
import AnimatedTextHalf from "@/components/AnimatedTextHalf";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
      <AnimatedTextHalf />
    </main>
  );
}
