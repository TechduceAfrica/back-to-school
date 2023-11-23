import React from 'react';
import './GetInvolvedSection.css';
import DigitalLibrarySectionThree from './DigitalLibrarySectionThree';
import { GetInvolved, GetInvolvedSectionFourBox } from '../Contents/Getinvolved';
import DigitalLibrarySectionTwo from './DigitalLibrarySectionTwo';
import GetInvolvedSectionFour from './GetInvolvedSectionFour';
import VolunteerForm from './VolunteerForm'

export default function GetInvolvedSection() {
  return (
    <>
        <div>
            <div className='get-involved-how-to'>
                <h3>How to get involved with our charity</h3>
                <p>
                    At BackToSchool, we firmly believe that real change 
                    happens when individuals come together with a shared 
                    passion for a brighter future. Our volunteers are 
                    the heart and soul of our organization, and their 
                    dedication plays a pivotal role in transforming the 
                    lives of underprivileged children.
                </p>
            </div>

            <DigitalLibrarySectionTwo
                DLSectionTwoTitle={GetInvolved.GetInvolvedSectionTwoTitle}
                DLSectionTwoBoxTitleOne={GetInvolved.GetInvolvedSectionTwoBoxTitleOne}
                DLSectionTwoBoxTextOne={GetInvolved.GetInvolvedSectionTwoBoxTextOne}
                DLSectionTwoBoxTitleTwo={GetInvolved.GetInvolvedSectionTwoBoxTitleTwo}
                DLSectionTwoBoxTextTwo={GetInvolved.GetInvolvedSectionTwoBoxTextTwo}
                DLSectionTwoBoxTitleThree={GetInvolved.DigitalLibrarySectionTwoBoxTitleThree}
                DLSectionTwoBoxTextThree={GetInvolved.DigitalLibrarySectionTwoBoxTextThree}/>

            <DigitalLibrarySectionThree
                DLSectionThreeTitle={GetInvolved.GetInvolvedSectionThreeTitle}
                DLSectionThreeTitleOne={GetInvolved.GetInvolvedSectionThreeTitleOne}
                DLSectionThreeTextOne={GetInvolved.GetInvolvedSectionThreeTextOne}
                DLSectionThreeTitleTwo={GetInvolved.GetInvolvedSectionThreeTitleTwo}
                DLSectionThreeTextTwo={GetInvolved.GetInvolvedSectionThreeTextTwo}
                DLSectionThreeTitleThree={GetInvolved.GetInvolvedSectionThreeTitleThree}
                DLSectionThreeTextThree={GetInvolved.GetInvolvedSectionThreeTextThree}
                DLSectionThreeTitleFour={GetInvolved.GetInvolvedSectionThreeTitleFour}
                DLSectionThreeTextFour={GetInvolved.GetInvolvedSectionThreeTextFour}
                DLSectionThreeTitleFive={GetInvolved.GetInvolvedSectionThreeTitleFive}
                DLSectionThreeTextFive={GetInvolved.GetInvolvedSectionThreeTextFive}
                DLSectionThreeImg={GetInvolved.GetInvolvedSectionThreeImg}
                DLSectionThreeImgAlt={GetInvolved.GetInvolvedSectionThreeImgAlt}
                DLSectionThreeImgWidth={GetInvolved.GetInvolvedSectionThreeImgWidth}
                DLSectionThreeImgHeight={GetInvolved.GetInvolvedSectionThreeImgHeight}
                />

            <div className='get__involved__section__4'>
                <h3>How to Get Started</h3>
                <div className='get__involved__section__4__box'>
                    {GetInvolvedSectionFourBox.map((GetInvolvedSectionFourBx, index) => 
                        (
                            <GetInvolvedSectionFour  key={index}
                                gisfNumber={GetInvolvedSectionFourBx.GetInvolvedSectionFourBoxNumber}
                                gisfTopic={GetInvolvedSectionFourBx.GetInvolvedSectionFourBoxTitle}
                                gisfBody={GetInvolvedSectionFourBx.GetInvolvedSectionFourBoxBody}/>
                        )
                    )}
                </div>
            </div>


            <div className='bord-rds get-involved-section green'>
                <div>
                    <h4>
                        Your Time, Their Future
                    </h4>
                    <p>
                        Join us in empowering children to break free from the cycle of poverty 
                        through education. Your time and dedication can help change lives. 
                        Together, we can create a brighter future for the next generation.
                    </p>
                </div>
                <div>
                    <img src='https://backtoschool.ngo/backtoschool-assets/Fundraise%20for%20back%20to%20school.png' alt='fundraising for back to school' />
                </div>
            </div>

            <VolunteerForm/>
            
        </div>
    </>
  )
}
