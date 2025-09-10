// src/app/page.tsx
"use client"

import FeatureSection from "@/components/layout/FeatureSection";
import HeroSection from "@/components/layout/HeroSection";
import USMap from "@/components/map/USMap";


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 overflow-y-auto">
      <HeroSection />
      <main className="container mx-auto my-12">
        <USMap />
      </main>
      <FeatureSection />
    </div>
  );
}