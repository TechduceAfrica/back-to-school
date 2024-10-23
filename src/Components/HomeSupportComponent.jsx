import React from 'react';
import SecondaryBtn from './SecondaryBtn';
import './HomeSupportComponent.css';

export default function HomeSupportComponent() {
  return (
    <>
        <div className='home-support-component-wrapper'>
            <div>
                <h4>Support us</h4>
                <h3>Join the Movement</h3>
                <p>
                    Every child's potential is limitless, but they need the right 
                    support to unlock it. You can be a part of this transformative 
                    journey. Join us in empowering children, families, and entire 
                    communities through education.
                </p>
                <div className='home-support-btn-wrapper'>
                    <SecondaryBtn 
                        btntext='get involved'
                        btnlink='./getinvolved'
                    />
                </div>
            </div>
            <div>
                <img 
                    src='https://backtoschool.ngo/backtoschool-assets/Back%20to%20school%20NGO%20-%20our%20supports.png' 
                    alt='Our support back to school' 
                />
            </div>
        </div>
    </>
  )
}
