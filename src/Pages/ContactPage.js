import React from 'react';
import { useEffect } from 'react';
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection';
import ContactMainSection from '../Components/ContactMainSection';

export default function ContactPage() {

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
    document.title = 'Back to School | Contact Back To School NGO Now';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="fade-in">
        <div style={{ backgroundImage: `url(${`https://backtoschool.ngo/backtoschool-assets/What%20back%20to%20school%20do.png`})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat'}}>
          <div div className='boxed pad'>
              <WhatWeDoHeroSection 
                title= "Contact Us"
                text= "Whether you have a question about our work, want to get involved or just want to say hello, we'd love to hear from you"/>    
          </div>
        </div>
        
        <div div className='boxed pad'>
          <ContactMainSection />
        </div>
        
      </div>
    </>
  )
}
