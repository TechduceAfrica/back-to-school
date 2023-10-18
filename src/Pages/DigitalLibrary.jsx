import React from 'react'

export default function DigitalLibrary() {
  return (
    <div className="fade-in">
        <div style={{ backgroundImage: `url(${`public/images/Back to school NGO_Digital Library_book-library-with-open-textbook 1_BacktoschoolNGO.webp`})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: '#000000'}}>
          <div div className='boxed pad'>
              <WhatWeDoHeroSection 
                title= "Digital Library"
                text= "We believe that access to quality education should be unresticted and our digital library is a testament to that belief."/>    
          </div>
        </div>
        <InitiativeSectionOne/>
    </div>
  )
}
