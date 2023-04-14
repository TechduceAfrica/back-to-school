import React from 'react';
import { useEffect } from 'react';
import WhatWeDoSubGroup from '../Components/WhatWeDoSubGroup.js';
import AboutPageHeroSection from '../Components/AboutPageHeroSection.js';
import AboutMissionVisionComponent from '../Components/AboutMissionVisionComponent.js';
import AboutVideoComponent from '../Components/AboutVideoComponent.js';
import AboutPageWhatWeDoComponent from '../Components/AboutPageWhatWeDoComponent.js';
// import '../index.css';

export default function AboutPage() {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const element = document.querySelector('.fade-in');
      if (element) {
        element.style.opacity = 1;
      }
    }, 100); // change this delay as needed
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    document.title = 'Back to School Story | High-quality education to disadvantaged children';
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <>
      <div className="fade-in boxed pad">
        <AboutPageHeroSection />
        <AboutMissionVisionComponent />
        <AboutVideoComponent />
        <AboutPageWhatWeDoComponent />
        <WhatWeDoSubGroup />
      </div>
    </>
  )
}
