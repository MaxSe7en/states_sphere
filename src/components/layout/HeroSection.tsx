// src/components/HeroSection.tsx
'use client';

import { ArrowDown } from 'lucide-react'; // Changed import from 'react-icons/fa' to 'lucide-react'

const HeroSection = () => {
  const handleScrollToMap = () => {
    const mapElement = document.getElementById('us-map-section');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="text-center py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Track Legislation. <br />
          Join the Discussion.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          Stay informed about government activity at the state, local, and federal levels and connect with your community.
        </p>
        <button
          onClick={handleScrollToMap}
          className="mt-8 px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Find Your State <ArrowDown className="inline-block ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;