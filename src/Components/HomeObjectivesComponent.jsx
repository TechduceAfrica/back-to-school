import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import './HomeObjectivesComponent.css'

export default function HomeObjectivesComponent() {
  return (
    <>
        <div className='home-obj-wrapper'>
            <div>
                <h3>
                    What Sets Us Apart
                </h3>
                <div>
                    <p>
                        Passion for Impact: Our team is driven by a passion for making a tangible impact 
                        on the lives of children. We are committed to ensuring that education is not just 
                        a privilege but a right for all.
                    </p>
                    <p>
                        Holistic Approach: BackToSchool takes a holistic approach to education. We believe 
                        that it's not enough to simply provide resources; we strive to create a supportive 
                        ecosystem for learning.
                    </p>
                    <p>
                        Community-Centric: We work closely with communities, parents, teachers, and 
                        volunteers to create a collective force for change. Together, we can overcome 
                        any obstacles in the path to education. 
                    </p>
                </div>
                <div className='home-obj-btn-wrapper'>
                    <PrimaryBtn
                        btnlink='./ourstory'
                        btntext='read more'
                    />
                </div>
            </div>
            <div>
                <img 
                    src='https://backtoschool.ngo/backtoschool-assets/Back%20to%20school%20ngo%20objectives.png' 
                    alt='Back to school NGO objectives' 
                />
            </div>
        </div>
    </>
  )
}
