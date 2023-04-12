import React from 'react';
import SecondaryBtn from './SecondaryBtn';
import './HomeSupportComponent.css';

export default function HomeSupportComponent() {
  return (
    <>
        <div className='home-support-component-wrapper'>
            <div>
                <h4>Support us</h4>
                <h3>We've raised over ₦2m for homelessness</h3>
                <p>
                    Our activities and efforts have helped needy people 
                    and communities. We have improved education, 
                    healthcare, hunger, poverty, and environmental 
                    sustainability. Individual donations, business 
                    sponsorships, and foundation grants have funded this. 
                    We appreciate any donation, big or small. 
                    We can improve the future together.
                </p>
                <div className='home-support-btn-wrapper'>
                    <SecondaryBtn 
                        btntext='get involved'
                        btnlink='/getinvolved'
                    />
                </div>
            </div>
            <div>
                <img src='https://backtoschool.ngo/backtoschool-assets/Back%20to%20school%20NGO%20-%20our%20supports.png' alt='Our support back to school' />
            </div>
        </div>
    </>
  )
}
