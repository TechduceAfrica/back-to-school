import React from 'react'
import DigitalLibraryContent from '../Contents/DigitalLibrary'
import PrimaryBtn from './PrimaryBtn';

export default function DigitalLibraryCta() {
  return (
    <div className='NGO-dl__cta'>
        <div>
            <span>
                {DigitalLibraryContent.DigitalLibraryCtaSubTitle}
            </span>
            <h3>
                {DigitalLibraryContent.DigitalLibraryCtaTitle}
            </h3>
            <p>
                {DigitalLibraryContent.DigitalLibraryCtaText}
            </p>
            <PrimaryBtn
                btntext= {DigitalLibraryContent.DigitalLibraryCtaBtn}
                btnlink= './getinvolved' />
        </div>
        <div>
            <img 
                src={DigitalLibraryContent.DigitalLibraryCtaImg} 
                alt={DigitalLibraryContent.DigitalLibraryCtaImgAlt} 
                title={DigitalLibraryContent.DigitalLibraryCtaImgAlt}
                width={DigitalLibraryContent.DigitalLibraryCtaImgWidth}
                height={DigitalLibraryContent.DigitalLibraryCtaImgHeight} />
        </div>
    </div>
  )
}
