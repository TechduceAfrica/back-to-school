import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import '../Stylesheet/DigitalLibrary.css'
import DigitalLibraryContent from '../Contents/DigitalLibrary'
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection'
import DigitalLibrarySectionOne from '../Components/DigitalLibrarySectionOne';
import DigitalLibrarySectionTwo from '../Components/DigitalLibrarySectionTwo';
import DigitalLibraryCta from '../Components/DigitalLibraryCta';
import DigitalLibrarySectionThree from '../Components/DigitalLibrarySectionThree';


export default function DigitalLibrary() {

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
    document.title = 'Digital Library | Access to Quality Education Should Be Unrestricted';
    window.scrollTo(0, 0);
}, []);

// page schema
const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Digital Library | Access to Quality Education Should Be Unrestricted",
    "image": "https://backtoschoolngo.com/images/Back%20to%20school%20NGO%201_BacktoschoolNGO.webp",
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
    "dateModified": "2023-10-19T12:00:00Z",
    "articleBody": "Welcome to the BackToSchool Digital Library, a gateway to limitless educational resources for children of all ages..."
};


  return (
    <div className="fade-in initiative-page">
      {/* Open graph tag for social media */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <title>Digital Library | Access to Quality Education Should Be Unrestricted</title>
        <meta property="og:title" content="Digital Library" />
        <meta property="og:description" content="Welcome to the BackToSchool Digital Library, a gateway to limitless educational resources for children of all ages..." />
        <meta property="og:image" content="https://backtoschoolngo.com/images/Back%20to%20school%20NGO%201_BacktoschoolNGO.webp" />
        <meta property="og:url" content="https://www.backtoschoolngo.com/digital-library" />
      </Helmet>
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Back%20to%20school%20NGO_Digital%20Library_book-library-with-open-textbook%201_BacktoschoolNGO.webp'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#000000'}}>
        <div div className='boxed pad'>
            <WhatWeDoHeroSection 
              title= "Digital Library"
              text= "We believe that access to quality education should be unresticted and our digital library is a testament to that belief."/>    
        </div>
      </div>
      <main className='boxed pad'>
        <DigitalLibrarySectionOne/>
        <article>
          <DigitalLibrarySectionTwo
                DLSectionTwoTitle={DigitalLibraryContent.DigitalLibrarySectionTwoTitle}
                DLSectionTwoBoxTitleOne={DigitalLibraryContent.DigitalLibrarySectionTwoBoxTitleOne}
                DLSectionTwoBoxTextOne={DigitalLibraryContent.DigitalLibrarySectionTwoBoxTextOne}
                DLSectionTwoBoxTitleTwo={DigitalLibraryContent.DigitalLibrarySectionTwoBoxTitleTwo}
                DLSectionTwoBoxTextTwo={DigitalLibraryContent.DigitalLibrarySectionTwoBoxTextTwo}
                DLSectionTwoBoxTitleThree={DigitalLibraryContent.DigitalLibrarySectionTwoBoxTitleThree}
                DLSectionTwoBoxTextThree={DigitalLibraryContent.DigitalLibrarySectionTwoBoxTextThree}/>
        </article>
        <DigitalLibrarySectionThree
                DLSectionThreeTitle={DigitalLibraryContent.DigitalLibrarySectionThreeTitle}
                DLSectionThreeTitleOne={DigitalLibraryContent.DigitalLibrarySectionThreeTitleOne}
                DLSectionThreeTextOne={DigitalLibraryContent.DigitalLibrarySectionThreeTextOne}
                DLSectionThreeTitleTwo={DigitalLibraryContent.DigitalLibrarySectionThreeTitleTwo}
                DLSectionThreeTextTwo={DigitalLibraryContent.DigitalLibrarySectionThreeTextTwo}
                DLSectionThreeTitleThree={DigitalLibraryContent.DigitalLibrarySectionThreeTitleThree}
                DLSectionThreeTextThree={DigitalLibraryContent.DigitalLibrarySectionThreeTextThree}
                DLSectionThreeTitleFour={DigitalLibraryContent.DigitalLibrarySectionThreeTitleFour}
                DLSectionThreeTextFour={DigitalLibraryContent.DigitalLibrarySectionThreeTextFour}
                DLSectionThreeTitleFive={DigitalLibraryContent.DigitalLibrarySectionThreeTitleFive}
                DLSectionThreeTextFive={DigitalLibraryContent.DigitalLibrarySectionThreeTextFive}
                DLSectionThreeImg={DigitalLibraryContent.DigitalLibrarySectionThreeImg}
                DLSectionThreeImgAlt={DigitalLibraryContent.DigitalLibrarySectionThreeImgAlt}
                DLSectionThreeImgWidth={DigitalLibraryContent.DigitalLibrarySectionThreeImgWidth}
                DLSectionThreeImgHeight={DigitalLibraryContent.DigitalLibrarySectionThreeImgHeight}
                />
        <DigitalLibraryCta/>
      </main>      
    </div>
  )
}
