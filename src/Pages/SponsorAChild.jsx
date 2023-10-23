import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection'
import InitiativeMainText from '../Components/InitiativeMainText'
import InitiativeSectionOne from '../Components/InitiativeSectionOne'
import InitiativeSectionTwo from '../Components/InitiativeSectionTwo'
import InitiativeWhatWeDoSection from '../Components/InitiativeWhatWeDoSection'
import SponsorChild from '../Contents/SponsorChild'

export default function SponsorAChild() {

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
        document.title = 'Sponsor a Child Campaign | Empowering Young Minds';
        window.scrollTo(0, 0);
    }, []);

    // page schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Sponsor a Child Campaign | Empowering Young Minds",
        "image": "https://backtoschoolngo.com/images/BacktoschoolNGO%20Sponsor%20a%20Child%20Campaign.webp",
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
        "articleBody": "Our Sponsor a Child Campaign is a powerful way to make a lasting impact on a child's education..."
    };


    return (
        <div className="fade-in initiative-page">

            {/* Open graph tag for social media */}
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
                <title>Sponsor a Child Campaign | Empowering Young Minds</title>
                <meta property="og:title" content="Sponsor a Child Campaign" />
                <meta property="og:description" content="Our Sponsor a Child Campaign is a powerful way to make a lasting impact on a child's education..." />
                <meta property="og:image" content="https://backtoschoolngo.com/images/BacktoschoolNGO%20Sponsor%20a%20Child%20Campaign.webp" />
                <meta property="og:url" content="https://www.backtoschoolngo.com/sponsor-a-child-campaign" />
            </Helmet>

            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Back%20to%20school%20NGO_Digital%20Library_book-library-with-open-textbook%201_BacktoschoolNGO.webp'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#000000'}}>
            <div div className='boxed pad'>
                <WhatWeDoHeroSection 
                    title= "Sponsor a Child Campaign"
                    text= "Empowering Young Minds with the Tools to Succeed."/>    
            </div>
            </div>
            <main className='boxed pad'>
                <InitiativeMainText
                    imttitle={SponsorChild.InitiativeMainTextTitle}
                    imttext={SponsorChild.InitiativeMainTextText}/>
                <InitiativeSectionOne
                    bihsrc={SponsorChild.InitiativeSectionOneImg}
                    bihalt={SponsorChild.InitiativeSectionOneImgAlt}
                    bihwidth={SponsorChild.InitiativeSectionOneImgWidth}
                    bihheight={SponsorChild.InitiativeSectionOneImgHeight}
                    bihtext={SponsorChild.InitiativeSectionOneTextBody}
                    bihtitle={SponsorChild.InitiativeSectionOneTitle}/>
                <InitiativeSectionTwo
                    isttitle={SponsorChild.InitiativeSectionTwoTitle}
                    btntext={SponsorChild.InitiativeSectionTwoBTNText}
                    boxtitleone={SponsorChild.InitiativeSectionTwoBoxTitleOne}
                    boxtextone={SponsorChild.InitiativeSectionTwoBoxTextOne}
                    boxtitletwo={SponsorChild.InitiativeSectionTwoBoxTitleTwo}
                    boxtexttwo={SponsorChild.InitiativeSectionTwoBoxTextTwo}
                    boxtitlethree={SponsorChild.InitiativeSectionTwoBoxTitleThree}
                    boxtextthree={SponsorChild.InitiativeSectionTwoBoxTextThree}/>
                <InitiativeWhatWeDoSection
                    iwdstext={SponsorChild.InitiativeWhatWeDoSectionText}
                    iwdslistone={SponsorChild.InitiativeWhatWeDoSectionListOne}
                    iwdslisttwo={SponsorChild.InitiativeWhatWeDoSectionListTwo}
                    iwdslistthree={SponsorChild.InitiativeWhatWeDoSectionListThree}
                    iwdssrc={SponsorChild.InitiativeWhatWeDoSectionImg}
                    iwdsalt={SponsorChild.InitiativeWhatWeDoSectionImgAlt}
                    iwdswidth={SponsorChild.InitiativeWhatWeDoSectionImgWidth}
                    iwdsheight={SponsorChild.InitiativeWhatWeDoSectionImgHeight}/>
            </main>
        </div>
    )
}
