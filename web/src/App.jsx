import React from 'react';
import HeroSection from './components/HeroSection';
import FeedGallery from './components/FeedGallery';
import ReviewGallery from './components/ReviewGallery';

function App() {
  return (
    <div className="container">
      <HeroSection />
      <FeedGallery />
      <ReviewGallery />
    </div>
  );
}

export default App;
