import React from 'react';
import WhatWeDoSubGroup from '../Components/WhatWeDoSubGroup.js';
import AboutPageHeroSection from '../Components/AboutPageHeroSection.js';
import AboutMissionVisionComponent from '../Components/AboutMissionVisionComponent.js';
import AboutVideoComponent from '../Components/AboutVideoComponent.js';
import AboutPageWhatWeDoComponent from '../Components/AboutPageWhatWeDoComponent.js';

export default function AboutPage() {
  return (
    <>
        <AboutPageHeroSection />
        <AboutMissionVisionComponent />
        <AboutVideoComponent />
        <AboutPageWhatWeDoComponent />
        <WhatWeDoSubGroup />
    </>
  )
}
