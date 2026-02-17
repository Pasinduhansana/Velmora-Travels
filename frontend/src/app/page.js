import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "../components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Footer />
    </main>
  );
}
