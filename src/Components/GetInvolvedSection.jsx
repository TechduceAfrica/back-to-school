import React from 'react';
import './GetInvolvedSection.css';
import DigitalLibrarySectionThree from './DigitalLibrarySectionThree';
import GetInvolved from '../Contents/Getinvolved';
import DigitalLibrarySectionTwo from './DigitalLibrarySectionTwo';

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

            {/* <div className='bord-rds get-involved-section green'>
                <div>
                    <h4>
                        Volunteer
                    </h4>
                    <p>
                        Become a Back To School volunteer. 
                        Join our army of volunteers, learn new skills, 
                        meet new people and help us reach more out of school children.
                    </p>
                </div>
                <div>
                    <VolunteerForm />
                </div>
            </div> */}

            <div className='bord-rds get-involved-section light'>
                <div>
                    <h4>
                        Fundraise
                    </h4>
                    <p>
                        Fundraisers play a critical role in keeping the flame of 
                        Back to School glowing. These selfless givers raise money 
                        to provide daily meals for hungry schoolchildren all 
                        across the world. From a young child using their own 
                        money to help others to community-wide fundraising efforts, 
                        every single one of them is inspiring. The lives of 
                        children in some of Nigeria's poorest states can be 
                        improved significantly as a result of your efforts.
                    </p>
                    {/* <div className='get-involved-btn'>
                        <PrimaryBtn btntext='Give Now' btnlink='/' />
                    </div> */}
                </div>
                <div>
                    <img src='https://backtoschool.ngo/backtoschool-assets/Fundraise%20for%20back%20to%20school.png' alt='fundraising for back to school' />
                </div>
            </div>
        </div>
    </>
  )
}
