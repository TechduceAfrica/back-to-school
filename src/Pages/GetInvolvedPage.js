import React from 'react';
import { useEffect } from 'react';
import GetInvolvedSection from '../Components/GetInvolvedSection';
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection';

export default function GetInvolvedPage() {

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
        document.title = 'Back to School | Get Involved In A Charity Act Today';
        window.scrollTo(0, 0);
      }, []);


  return (
    <>
        <div className="fade-in">
            <div style={{ backgroundImage: `url(${`https://backtoschool.ngo/backtoschool-assets/Get%20Involved%20Hero.png`})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'}}>
                <div div className='boxed pad'>
                <WhatWeDoHeroSection 
                    title= "Get Involved"
                    text= "There are many ways to support our work and help to reach the next out of school child waiting to get Back to School."/>    
                </div> 
            </div>

            <div className='boxed pad'>
                <GetInvolvedSection />
            </div>
        </div>
    </>
  )
}
