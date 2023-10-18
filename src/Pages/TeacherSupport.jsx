import React, {useEffect} from 'react'
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

  return (
    <div className="fade-in initiative-page">
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
