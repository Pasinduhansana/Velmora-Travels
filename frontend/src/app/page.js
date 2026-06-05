import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "../components/Footer";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import HomePackages from "@/components/HomePackages";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <HomePackages />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
