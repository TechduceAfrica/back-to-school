import React from 'react';
import Testimmonial from '../Components/Testimonial';
import HomeHeroSection from '../Components/HomeHeroSection';
import HomeAboutComponent from '../Components/HomeAboutComponent';
import HomeObjectivesComponent from '../Components/HomeObjectivesComponent';
import WhatWeDoNoBg from '../Components/WhatWeDoNoBg';
import HomeSupportComponent from '../Components/HomeSupportComponent';

export default function Homepage() {
  return (
    <>
        <div>
            <HomeHeroSection />
            <HomeAboutComponent />
            <HomeObjectivesComponent />
            <WhatWeDoNoBg />
            <HomeSupportComponent />
            <Testimmonial />
        </div>
        
    </>
  )
}
