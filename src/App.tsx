import React from 'react';
import { HeroSection } from './components/HeroSection';
import { StatisticsSection } from './components/StatisticsSection';
import { EventOverview } from './components/EventOverview';
import { ImageGallery } from './components/ImageGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHighlight } from './components/LocationHighlight';
import { SocialLinks } from './components/SocialLinks';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <HeroSection />
      <StatisticsSection />
      <EventOverview />
      <ImageGallery />
      <ReviewsSection />
      <LocationHighlight />
      <SocialLinks />
      <CallToAction />
    </div>
  );
}

export default App;