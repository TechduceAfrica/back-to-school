import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection';
import ContactMainSection from '../Components/ContactMainSection';
import Form from '../Components/Form';

export default function ContactPage() {

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
    document.title = 'Back to School | Contact Back To School NGO Now';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Open graph tag for social media */}
      <Helmet>
        <title>Contact Back To School NGO Now | Back to School Story</title>
        <meta property="og:title" content="Contact Back To School NGO" />
        <meta property="og:description" content="Whether you have a question about our work, want to get involved or just want to say hello, we'd love to hear from you" />
        <meta property="og:image" content="https://backtoschoolngo.netlify.app/static/media/Back%20to%20school%20NGO%20Hero%20img.da35e1431f101646fc93.png" />
        <meta property="og:url" content="https://www.backtoschoolngo.com/contactus" />
      </Helmet>

      <div className="fade-in">
        <div style={{ backgroundImage: `url(${`https://backtoschool.ngo/backtoschool-assets/What%20back%20to%20school%20do.png`})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: '#000000'}}>
          <div div className='boxed pad'>
              <WhatWeDoHeroSection 
                title= "Contact Us"
                text= "Whether you have a question about our work, want to get involved or just want to say hello, we'd love to hear from you"/>    
          </div>
        </div>
        
        <div div className='boxed pad'>
          <ContactMainSection />
        </div>
        <Form />
      </div>
    </>
  )
}
