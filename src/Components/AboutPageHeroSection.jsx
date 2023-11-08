import React from 'react';
import './AboutPageHeroSection.css';

export default function AboutPageHeroSection() {
  return (
    <>
        <div className='about-hero-section-wrapper'>
            <div className='about-hero-section-text'>
                <h4>our Story</h4>
                <h2>About Back To School</h2>
                <p>
                    Founded in 2022, BackToSchool was born out of a desire to make a 
                    positive impact on the lives of underprivileged children and 
                    communities. Our founders recognized the educational disparities 
                    that exist in the world, and they were determined to be part of 
                    the solution.
                </p>
            </div>
            <div className='about-hero-section-img'>
                <img src='https://backtoschool.ngo/backtoschool-assets/About%20Back%20to%20school%20Hero%20img.png' alt='About Back to School' />
            </div>
        </div>
    </>
  )
}
