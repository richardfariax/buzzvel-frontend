import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { ComboSection } from "@/components/ComboSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Header />
      <HeroSection />
      <ComboSection />
      <Footer />
    </main>
  );
}
