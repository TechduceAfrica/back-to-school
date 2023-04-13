import React from 'react';
import { useEffect } from 'react';
import Testimmonial from '../Components/Testimonial';
import HomeHeroSection from '../Components/HomeHeroSection';
import HomeAboutComponent from '../Components/HomeAboutComponent';
import HomeObjectivesComponent from '../Components/HomeObjectivesComponent';
import WhatWeDoNoBg from '../Components/WhatWeDoNoBg';
import HomeSupportComponent from '../Components/HomeSupportComponent';
import '../index.css';

export default function Homepage() {

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
    document.title = 'Back to School | Help A Child Back To School';
  }, []);

  return (
    < >
        <div className="fade-in">
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
