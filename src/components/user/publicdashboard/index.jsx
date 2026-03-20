import React from 'react';
import HeroSection from './HeroSection';
import OffersStrip from './OffersStrip';
import StatsSection from './StatsSection';
import FeaturesSection from './FeaturesSection';
import PopularItems from './PopularItems';
import PizzaBases from './PizzaBases';
import SaucesSection from './SaucesSection';
import ToppingsSection from './ToppingsSection';
import HowItWorks from './HowItWorks';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import FooterSection from './FooterSection';

const PublicDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <OffersStrip />
      <StatsSection />
      <FeaturesSection />
      <PopularItems />
      <PizzaBases />
      <SaucesSection />
      <ToppingsSection />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
      
      {/* Global Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PublicDashboard;