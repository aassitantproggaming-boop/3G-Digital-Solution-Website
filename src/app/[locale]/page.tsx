"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <main className="min-h-screen bg-white">
      <Navbar locale={locale} />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
