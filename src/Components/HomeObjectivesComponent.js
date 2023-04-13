import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import './HomeObjectivesComponent.css'

export default function HomeObjectivesComponent() {
  return (
    <>
        <div className='home-obj-wrapper'>
            <div>
                <h3>
                    Our Objectives
                </h3>
                <div>
                    <ul>
                        <li>To provide free and high-quality education to children who are unable to attend school due to financial or other barriers.</li>
                        <li>To increase the enrolment and retention of children in schools by reducing primary dropout rates.</li>
                        <li>To empower children with life skills and knowledge that can help them lead a successful and fulfilling life</li>
                        <li>To promote gender equality by ensuring that both girls and boys have equal access to education.</li>
                        <li>To engage with parents and communities to create a supportive environment for children to learn and grow.</li>
                        <li>To partner with local schools, businesses, and other organizations to expand the reach and impact of our programs.</li>
                    </ul>
                </div>
                <div className='home-obj-btn-wrapper'>
                    <PrimaryBtn
                        btnlink='./ourstory'
                        btntext='read more'
                    />
                </div>
            </div>
            <div>
                <img src='https://backtoschool.ngo/backtoschool-assets/Back%20to%20school%20ngo%20objectives.png' alt='Back to school NGO objectives' />
            </div>
        </div>
    </>
  )
}
