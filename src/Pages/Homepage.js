import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // page schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "headline": "Help A Child Go Back To School",
    "name": "Back to School NGO",
    "url": "https://backtoschoolngo.com/",
    "logo": "https://backtoschoolngo.netlify.app/static/media/Logo.949cc01fdb53ab9e7879a5171446c22b.svg",
    "description": "Going back to school is an exciting time for students, but for many children around the world, this is a luxury they cannot afford. Lack of access to education has a profound impact on a child’s future, limiting their opportunities and perpetuating a cycle of poverty. That’s where our NGO comes in.",
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
    "dateModified": "2022-04-18T12:00:00Z",
    "articleBody": "Going back to school is an exciting time for students, but for many children around the world, this is a luxury they cannot afford. Lack of access to education has a profound impact on a child’s future, limiting their opportunities and perpetuating a cycle of poverty. That’s where our NGO comes in."
  };


  return (
    < >
      {/* Open graph tag for social media */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <title>Back to School | Help A Child Back To School</title>
        <meta property="og:title" content="Help A Child Go Back To School" />
        <meta property="og:description" content="Going back to school is an exciting time for students, but for many children around the world, this is a luxury they cannot afford." />
        <meta property="og:image" content="https://backtoschoolngo.netlify.app/static/media/Back%20to%20school%20NGO%20Hero%20img.da35e1431f101646fc93.png" />
        <meta property="og:url" content="https://www.backtoschoolngo.com/" />
      </Helmet>

        <div className="fade-in boxed pad">
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
