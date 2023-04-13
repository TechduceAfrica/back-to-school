import React from 'react';
import { useEffect } from 'react';
import WhatWeDoSubGroup from '../Components/WhatWeDoSubGroup';
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection';
import WhatWeDoSectionTwo from '../Components/WhatWeDoSectionTwo';
import WhatWeDoImpactSection from '../Components/WhatWeDoImpactSection';

export default function WhatWeDoPage() {

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
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <div className="fade-in">
            <WhatWeDoHeroSection />
            <WhatWeDoSectionTwo />
            <WhatWeDoImpactSection />
            <WhatWeDoSubGroup />
        </div>  
    </>
  )
}
