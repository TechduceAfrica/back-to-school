import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import GetInvolvedSection from '../Components/GetInvolvedSection';
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection';

export default function GetInvolvedPage() {

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
        document.title = 'Back to School | Get Involved In A Charity Act Today';
        window.scrollTo(0, 0);
      }, []);


  return (
    <>
      {/* Open graph tag for social media */}
      <Helmet>
        <title>Get Involved In A Charity Act Today | Back to School NGO</title>
        <meta property="og:title" content="Get Involved In A Charity Act Today" />
        <meta property="og:description" content="There are many ways to support our work and help to reach the next out of school child waiting to get Back to School." />
        <meta property="og:image" content="https://backtoschoolngo.netlify.app/static/media/Back%20to%20school%20NGO%20Hero%20img.da35e1431f101646fc93.png" />
        <meta property="og:url" content="https://www.backtoschoolngo.com/getinvolved" />
      </Helmet>

        <div className="fade-in">
            <div style={{ backgroundImage: `url(${`https://backtoschool.ngo/backtoschool-assets/Get%20Involved%20Hero.png`})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#000000'}}>
                <div div className='boxed pad'>
                <WhatWeDoHeroSection 
                    title= "Volunteer with BackToSchool"
                    text= "Make a Difference, One Child at a Time"/>    
                </div> 
            </div>

            <div className='boxed pad'>
                <GetInvolvedSection />
            </div>
        </div>
    </>
  )
}
