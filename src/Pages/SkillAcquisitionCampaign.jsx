import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection'
import InitiativeMainText from '../Components/InitiativeMainText'
import InitiativeSectionOne from '../Components/InitiativeSectionOne'
import InitiativeSectionTwo from '../Components/InitiativeSectionTwo'
import InitiativeWhatWeDoSection from '../Components/InitiativeWhatWeDoSection'
import SkillCampaign from '../Contents/SkillAcquisitionCampaign'

export default function SkillAcquisitionCampaign() {

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
        document.title = 'Skill Acquisition Campaign | Empowering Young Minds';
        window.scrollTo(0, 0);
    }, []);

    // page schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Skill Acquisition Campaign | Empowering Young Minds",
        "image": "https://backtoschoolngo.com/images/Skill%20Acquisition%20Campaign.webp",
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
        "articleBody": " Our Skill Acquisition Campaign focuses on equipping out-of-school youth with practical skills that enhance their employability and open doors to entrepreneurship..."
    };

    return (
        <div className="fade-in initiative-page">
            {/* Open graph tag for social media */}
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
                <title>Skill Acquisition Campaign | Empowering Young Minds</title>
                <meta property="og:title" content="Skill Acquisition Campaign" />
                <meta property="og:description" content=" Our Skill Acquisition Campaign focuses on equipping out-of-school youth with practical skills that enhance their employability and open doors to entrepreneurship..." />
                <meta property="og:image" content="https://backtoschoolngo.com/images/Skill%20Acquisition%20Campaign.webp" />
                <meta property="og:url" content="https://www.backtoschoolngo.com/skill-acquisition-campaign" />
            </Helmet>

            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Back%20to%20school%20NGO_Digital%20Library_book-library-with-open-textbook%201_BacktoschoolNGO.webp'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#000000'}}>
            <div div className='boxed pad'>
                <WhatWeDoHeroSection 
                    title= "Skill Acquisition Campaign"
                    text= "Empowering Young Minds with the Tools to Succeed."/>    
            </div>
            </div>
            <main className='boxed pad'>
                <InitiativeMainText
                    imttitle={SkillCampaign.InitiativeMainTextTitle}
                    imttext={SkillCampaign.InitiativeMainTextText}/>
                <InitiativeSectionOne
                    bihsrc={SkillCampaign.InitiativeSectionOneImg}
                    bihalt={SkillCampaign.InitiativeSectionOneImgAlt}
                    bihwidth={SkillCampaign.InitiativeSectionOneImgWidth}
                    bihheight={SkillCampaign.InitiativeSectionOneImgHeight}
                    bihtext={SkillCampaign.InitiativeSectionOneTextBody}
                    bihtitle={SkillCampaign.InitiativeSectionOneTitle}/>
                <InitiativeSectionTwo
                    isttitle={SkillCampaign.InitiativeSectionTwoTitle}
                    btntext={SkillCampaign.InitiativeSectionTwoBTNText}
                    boxtitleone={SkillCampaign.InitiativeSectionTwoBoxTitleOne}
                    boxtextone={SkillCampaign.InitiativeSectionTwoBoxTextOne}
                    boxtitletwo={SkillCampaign.InitiativeSectionTwoBoxTitleTwo}
                    boxtexttwo={SkillCampaign.InitiativeSectionTwoBoxTextTwo}
                    boxtitlethree={SkillCampaign.InitiativeSectionTwoBoxTitleThree}
                    boxtextthree={SkillCampaign.InitiativeSectionTwoBoxTextThree}/>
                <InitiativeWhatWeDoSection
                    iwdstext={SkillCampaign.InitiativeWhatWeDoSectionText}
                    iwdslistone={SkillCampaign.InitiativeWhatWeDoSectionListOne}
                    iwdslisttwo={SkillCampaign.InitiativeWhatWeDoSectionListTwo}
                    iwdslistthree={SkillCampaign.InitiativeWhatWeDoSectionListThree}
                    iwdssrc={SkillCampaign.InitiativeWhatWeDoSectionImg}
                    iwdsalt={SkillCampaign.InitiativeWhatWeDoSectionImgAlt}
                    iwdswidth={SkillCampaign.InitiativeWhatWeDoSectionImgWidth}
                    iwdsheight={SkillCampaign.InitiativeWhatWeDoSectionImgHeight}/>
            </main>
        </div>
    )
}
