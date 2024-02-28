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
                        Our Vision
                    </h3>
                    <p>
                        A World of Equal Opportunities: We envision a world where every child 
                        has the same opportunities to learn, grow, and achieve their dreams. 
                        We believe that access to quality education should be universal.
                    </p>
                    
                    <p>
                        Breaking Barriers: Our vision is to break down the barriers that hinder 
                        children from receiving an education, be it financial, social, or 
                        geographical. We strive to create a future where these barriers cease to exist.
                    </p>
                    
                    <p>
                        Empowering Change: We see a world where education empowers children to change 
                        their lives, their families, and their communities. Through knowledge, we 
                        aim to bring about lasting positive change.
                    </p>
                    <div className='home-about-section-wrapper-right-btn'>
                        <PrimaryBtn
                            btntext= 'read more'
                            btnlink= './ourstory' />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
