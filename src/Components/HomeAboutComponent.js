import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import SchChildren from '../assets/Back to school children.png'
import './HomeAboutComponent.css'


export default function HomeAboutComponent() {
  return (
    <>
        <div className='home-about-section-wrapper'>
            <div>
                <div className='left'>
                    <h4>About</h4>
                    <img src={SchChildren} alt='' />
                </div>

                <div>
                    <h3>
                        Our mission, vision, & purpose
                    </h3>
                    <p>
                        BackToSchool’s Mission is to provide quality education to children in need, 
                        regardless of their socio-economic background and empower them to build a 
                        better a future for themselves and their communities.
                    </p>
                    
                    <p>
                        BackToSchool envisions a world where every child has access to quality 
                        education and every child can achieve their full potential.
                    </p>
                    
                    <p>
                        Our purpose is to promote education as a tool for social and economic 
                        empowerment. Also to provide children with the knowledge and skills 
                        they need to succeed in life.
                    </p>
                    <div className='home-about-section-wrapper-right-btn'>
                        <PrimaryBtn
                            btntext= 'read more'
                            btnlink= '/about' />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
