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
                    Back to School is an Organisation that provides free, 
                    high-quality education to disadvantaged children. 
                    We reduce primary dropout rates, promote gender equality, 
                    and teach children life skills. To reach more people, 
                    we work with parents, communities, and local schools 
                    and businesses.
                </p>
            </div>
            <div className='about-hero-section-img'>
                <img src='https://backtoschool.ngo/backtoschool-assets/About%20Back%20to%20school%20Hero%20img.png' alt='About Back to School' />
            </div>
        </div>
    </>
  )
}
