import React from 'react';
import './WhatWeDoImpactSection.css';

export default function WhatWeDoImpactSection() {
  return (
    <>
        <div className='what-we-do-impact-section-wrapper'>
            <div className='what-we-do-impact-section-left'>
                <h3>
                    Our impact
                </h3>
                <p>
                    We collaborate with parents and communities to 
                    foster children's development. To help parents 
                    support their children's education and establish 
                    a good learning environment at home, we offer 
                    parenting classes.
                </p>
                <p>
                    We can remove barriers to education and ensure 
                    every child receives a great education by adopting 
                    these simple measures. Together, we can improve 
                    education rates and the future.
                </p>
            </div>
            <div>
                <img src='https://backtoschool.ngo/backtoschool-assets/back%20to%20school%20Impact.png' alt='Back to school impact'/>
            </div>
        </div>
    </>
  )
}
