import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection'
import InitiativeMainText from '../Components/InitiativeMainText'
import InitiativeSectionOne from '../Components/InitiativeSectionOne'
import InitiativeSectionTwo from '../Components/InitiativeSectionTwo'
import InitiativeWhatWeDoSection from '../Components/InitiativeWhatWeDoSection'
import TeacherTrainingAndSupport from '../Contents/TeacherTrainingAndSupport'

export default function TeacherSupport() {

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
        document.title = 'Teacher Training and Support | Empowering Young Minds';
        window.scrollTo(0, 0);
    }, []);

    // page schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Back To School NGO Teacher Training and Support | Empowering Young Minds",
        "image": "https://backtoschoolngo.com/images/Teacher%20Training_BacktoschoolNGO.webp",
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
        "articleBody": "Quality education begins with dedicated and skilled educators. BackToSchool's Teacher Training and Support Campaign is committed to enhancing the capabilities of teachers in underserved communities. We believe that by empowering teachers..."
    };

  return (
    <div className="fade-in initiative-page">

        {/* Open graph tag for social media */}
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
            <title>Teacher Training and Support | Empowering Young Minds</title>
            <meta property="og:title" content="Teacher Training and Support" />
            <meta property="og:description" content="Quality education begins with dedicated and skilled educators. BackToSchool's Teacher Training and Support Campaign is committed to enhancing the capabilities of teachers in underserved communities." />
            <meta property="og:image" content="https://backtoschoolngo.com/images/Teacher%20Training_BacktoschoolNGO.webp" />
            <meta property="og:url" content="https://www.backtoschoolngo.com/teacher-training-and-Support" />
        </Helmet>

        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Back%20to%20school%20NGO_Digital%20Library_book-library-with-open-textbook%201_BacktoschoolNGO.webp'})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: '#000000'}}>
          <div div className='boxed pad'>
              <WhatWeDoHeroSection 
                title= "Teacher Training and Support"
                text= "Empowering young minds with the tools to succeed."/>    
          </div>
        </div>
        <main className='boxed pad'>
            <InitiativeMainText
                imttitle={TeacherTrainingAndSupport.InitiativeMainTextTitle}
                imttext={TeacherTrainingAndSupport.InitiativeMainTextText}/>
            <InitiativeSectionOne
                bihsrc={TeacherTrainingAndSupport.InitiativeSectionOneImg}
                bihalt={TeacherTrainingAndSupport.InitiativeSectionOneImgAlt}
                bihwidth={TeacherTrainingAndSupport.InitiativeSectionOneImgWidth}
                bihheight={TeacherTrainingAndSupport.InitiativeSectionOneImgHeight}
                bihtext={TeacherTrainingAndSupport.InitiativeSectionOneTextBody}
                bihtitle={TeacherTrainingAndSupport.InitiativeSectionOneTitle}/>
            <InitiativeSectionTwo
                isttitle={TeacherTrainingAndSupport.InitiativeSectionTwoTitle}
                btntext={TeacherTrainingAndSupport.InitiativeSectionTwoBTNText}
                boxtitleone={TeacherTrainingAndSupport.InitiativeSectionTwoBoxTitleOne}
                boxtextone={TeacherTrainingAndSupport.InitiativeSectionTwoBoxTextOne}
                boxtitletwo={TeacherTrainingAndSupport.InitiativeSectionTwoBoxTitleTwo}
                boxtexttwo={TeacherTrainingAndSupport.InitiativeSectionTwoBoxTextTwo}
                boxtitlethree={TeacherTrainingAndSupport.InitiativeSectionTwoBoxTitleThree}
                boxtextthree={TeacherTrainingAndSupport.InitiativeSectionTwoBoxTextThree}/>
            <InitiativeWhatWeDoSection
                iwdstext={TeacherTrainingAndSupport.InitiativeWhatWeDoSectionText}
                iwdslistone={TeacherTrainingAndSupport.InitiativeWhatWeDoSectionListOne}
                iwdslisttwo={TeacherTrainingAndSupport.InitiativeWhatWeDoSectionListTwo}
                iwdslistthree={TeacherTrainingAndSupport.InitiativeWhatWeDoSectionListThree}
                iwdssrc={TeacherTrainingAndSupport.InitiativeWhatWeDoSectionImg}
                iwdsalt={TeacherTrainingAndSupport.InitiativeWhatWeDoSectionImgAlt}
                iwdswidth={TeacherTrainingAndSupport.InitiativeWhatWeDoSectionImgWidth}
                iwdsheight={TeacherTrainingAndSupport.InitiativeWhatWeDoSectionImgHeight}/>
        </main>
    </div>
  )
}
