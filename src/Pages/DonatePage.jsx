import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection';
import InitiativeMainText from '../Components/InitiativeMainText';
import InitiativeSectionTwo from '../Components/InitiativeSectionTwo';
import DigitalLibrarySectionThree from '../Components/DigitalLibrarySectionThree';
import DonateList from '../Components/DonateList';
import { DonatePageContent } from '../Contents/DonateContent'

export default function DonatePage() {

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
        document.title = 'Back to School Supply Drive | Empowering Young Minds';
        window.scrollTo(0, 0);
    }, []);

    // page schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Back to School NGO Supply Drive | Empowering Young Minds",
        "image": "https://backtoschoolngo.com/images/Back%20to%20School%20NGO%20Supply%20Drive.webp",
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
        "articleBody": "Our Back-to-School Supply Drive is a heartfelt initiative aimed at ensuring that no child is left behind due to a lack of essential school supplies..."
    };

  return (
    <div className="fade-in donate__page">

        {/* Open graph tag for social media */}
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
            <title>Donate Now | Be a Lifeline</title>
            <meta property="og:title" content="Donate Now" />
            <meta property="og:description" content="Our Back-to-School Supply Drive is a heartfelt initiative aimed at ensuring that no child is left behind due to a lack of essential school supplies..." />
            <meta property="og:image" content="https://backtoschoolngo.com/images/Back%20to%20School%20NGO%20Supply%20Drive.webp" />
            <meta property="og:url" content="https://www.backtoschoolngo.com/donate" />
        </Helmet>

        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Back%20to%20school%20NGO_Digital%20Library_book-library-with-open-textbook%201_BacktoschoolNGO.webp'})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: '#000000'}}>
            <div div className='boxed pad'>
                <WhatWeDoHeroSection 
                    title= "Be a Lifeline"
                    text= "Support education for all"/>    
            </div>
        </div>

        <main className='boxed pad'>
            <InitiativeMainText
                imttitle={DonatePageContent.dpcMainTextTitle}
                imttext={DonatePageContent.dpcMainTextText}
            />

            <InitiativeSectionTwo
                isttitle={DonatePageContent.dpcSectionTwoTitle}
                btntext={''}
                boxtitleone={DonatePageContent.dpcSectionTwoBoxTitleOne}
                boxtextone={DonatePageContent.dpcSectionTwoBoxTextOne}
                boxtitletwo={DonatePageContent.dpcSectionTwoBoxTitleTwo}
                boxtexttwo={DonatePageContent.dpcSectionTwoBoxTextTwo}
                boxtitlethree={DonatePageContent.dpcSectionTwoBoxTitleThree}
                boxtextthree={DonatePageContent.dpcSectionTwoBoxTextThree}
            />

            <DigitalLibrarySectionThree
                DLSectionThreeTitle={DonatePageContent.dpcSectionThreeTitle}
                DLSectionThreeTitleOne={DonatePageContent.dpcSectionThreeTitleOne}
                DLSectionThreeTextOne={DonatePageContent.dpcSectionThreeTextOne}
                DLSectionThreeTitleTwo={DonatePageContent.dpcSectionThreeTitleTwo}
                DLSectionThreeTextTwo={DonatePageContent.dpcSectionThreeTextTwo}
                DLSectionThreeTitleThree={DonatePageContent.dpcSectionThreeTitleThree}
                DLSectionThreeTextThree={DonatePageContent.dpcSectionThreeTextThree}
                DLSectionThreeTitleFour={DonatePageContent.dpcSectionThreeTitleFour}
                DLSectionThreeTextFour={DonatePageContent.dpcSectionThreeTextFour}
                DLSectionThreeTitleFive={DonatePageContent.dpcSectionThreeTitleFive}
                DLSectionThreeTextFive={DonatePageContent.dpcSectionThreeTextFive}
                DLSectionThreeImg={DonatePageContent.dpcSectionThreeImg}
                DLSectionThreeImgAlt={DonatePageContent.dpcSectionThreeImgAlt}
                DLSectionThreeImgWidth={DonatePageContent.dpcSectionThreeImgWidth}
                DLSectionThreeImgHeight={DonatePageContent.dpcSectionThreeImgHeight}
            />

            <DonateList 
                DonateListTitle={DonatePageContent.dpcDonateListTitle}/>

            <div className='bord-rds green'>
                <div>
                    <h4>
                        The Power of Collective Giving
                    </h4>
                    <p>
                        Your contribution, no matter the size, is part of a larger collective 
                        effort to transform lives. Together, we can bridge educational 
                        disparities and create a world where every child has the opportunity 
                        to learn, grow, and succeed.
                    </p>
                </div>
                <div>
                    <img src='https://backtoschool.ngo/backtoschool-assets/Fundraise%20for%20back%20to%20school.png' alt='fundraising for back to school' />
                </div>
            </div>
        </main>
        
    </div>
  )
}
