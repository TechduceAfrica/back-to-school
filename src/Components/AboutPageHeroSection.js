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
                    At BackToSchool, we're on a mission to change lives through the power of education. 
                    We firmly believe that education is not just a path to success but a fundamental 
                    right for every child, regardless of their circumstances. Our organization is 
                    dedicated to making this belief a reality.
                </p>
            </div>
            <div className='about-hero-section-img'>
                <img src='https://backtoschool.ngo/backtoschool-assets/About%20Back%20to%20school%20Hero%20img.png' alt='About Back to School' />
            </div>
        </div>
    </>
  )
}
