import React from 'react';
import './WhatWeDoHeroSection.css';

export default function WhatWeDoHeroSection(props) {
  return (
    <>
        <div className='what-we-do-hero-wrapper' >
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div> 
    </>
  )
}
