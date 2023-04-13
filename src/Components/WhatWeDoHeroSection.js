import React from 'react';
import './WhatWeDoHeroSection.css';

export default function WhatWeDoHeroSection() {
  return (
    <>
        <div className='what-we-do-hero-wrapper' style={{ backgroundImage: `url(${`https://backtoschool.ngo/backtoschool-assets/What%20back%20to%20school%20do.png`})` }}>
            <h2>What we do</h2>
            <p>Back To School is a Nigerian charity 
                organization providing lifechanging 
                opportunities for all out of school 
                kids to return back to the classroom</p>
        </div> 
    </>
  )
}
