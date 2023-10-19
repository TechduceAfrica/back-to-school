import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import WhatWeDoSubGroup from '../Components/WhatWeDoSubGroup.js';
import AboutPageHeroSection from '../Components/AboutPageHeroSection.js';
import AboutMissionVisionComponent from '../Components/AboutMissionVisionComponent.js';
import AboutVideoComponent from '../Components/AboutVideoComponent.js';
import AboutPageWhatWeDoComponent from '../Components/AboutPageWhatWeDoComponent.js';
// import '../index.css';

export default function AboutPage() {

  // fade in effect on load of page
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const element = document.querySelector('.fade-in');
      if (element) {
        element.style.opacity = 1;
      }
    }, 100); // change this delay as needed
    return () => clearTimeout(timeoutId);
  }, []);


  // Page title and make sure page scroll back to up on appearance
  useEffect(() => {
    document.title = 'Back to School Story | High-quality education to disadvantaged children';
    window.scrollTo(0, 0);
  }, []);
  
  // page schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "High-quality education to disadvantaged children | Back to School Story",
    "image": "https://backtoschoolngo.netlify.app/static/media/Back%20to%20school%20NGO%20Hero%20img.da35e1431f101646fc93.png",
    "author": {
      "@type": "Person",
      "name": "Techduce Africa"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Back To School NGO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://backtoschoolngo.netlify.app/static/media/Logo.949cc01fdb53ab9e7879a5171446c22b.svg"
      }
    },
    "datePublished": "2022-04-10T12:00:00Z",
    "dateModified": "2023-09-30T12:00:00Z",
    "articleBody": "At BackToSchool, we're on a mission to change lives through the power of education. We firmly believe that education is not just a path to success but a fundamental right for every child"
  };

  return (
    <>
    {/* Open graph tag for social media */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <title>High-quality education to disadvantaged children | Back to School Story</title>
        <meta property="og:title" content="Back To School Story" />
        <meta property="og:description" content="Going back to school is an exciting time for students, but for many children around the world, this is a luxury they cannot afford." />
        <meta property="og:image" content="https://backtoschoolngo.netlify.app/static/media/Back%20to%20school%20NGO%20Hero%20img.da35e1431f101646fc93.png" />
        <meta property="og:url" content="https://www.backtoschoolngo.com/" />
      </Helmet>
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
