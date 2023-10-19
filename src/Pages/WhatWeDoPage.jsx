import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import WhatWeDoSubGroup from '../Components/WhatWeDoSubGroup';
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection';
import WhatWeDoSectionTwo from '../Components/WhatWeDoSectionTwo';
import WhatWeDoImpactSection from '../Components/WhatWeDoImpactSection';

export default function WhatWeDoPage() {

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
        document.title = 'Back to School | Help A Child Back To School';
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      {/* Open graph tag for social media */}
      <Helmet>
        <title>Help A Child Back To School | Back to School Story</title>
        <meta property="og:title" content="Help A Child Back To School" />
        <meta property="og:description" content="Back To School is a Nigerian charity organization providing lifechanging opportunities for all out of schoolkids to return back to the classroom." />
        <meta property="og:image" content="https://backtoschoolngo.netlify.app/static/media/Back%20to%20school%20NGO%20Hero%20img.da35e1431f101646fc93.png" />
        <meta property="og:url" content="https://www.backtoschoolngo.com/whatwedo" />
      </Helmet>

        <div className="fade-in">
          <div style={{ backgroundImage: `url(${`https://backtoschool.ngo/backtoschool-assets/What%20back%20to%20school%20do.png`})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#000000'}}>
            <div div className='boxed pad'>
              <WhatWeDoHeroSection 
                title= "What we do"
                text= "Back To School is a Nigerian charity organization providing lifechanging opportunities for all out of schoolkids to return back to the classroom"/>    
            </div> 
          </div>

          <div className='boxed pad'>
            <WhatWeDoSectionTwo />
            <WhatWeDoImpactSection />
            <WhatWeDoSubGroup />
          </div>
        </div>  
    </>
  )
}
