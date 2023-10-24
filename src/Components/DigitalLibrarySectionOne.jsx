import React from 'react'
import DigitalLibraryContent from '../Contents/DigitalLibrary'

export default function DigitalLibrarySectionOne() {
  return (
    <div className='NGO-dl__section-one'>
        <div className="NGO-dl__sec1-img">
            <img 
                src={DigitalLibraryContent.DigitalLibrarySectionOneImg} 
                alt={DigitalLibraryContent.DigitalLibrarySectionOneImgAlt} 
                title={DigitalLibraryContent.DigitalLibrarySectionOneImgAlt}
                width={DigitalLibraryContent.DigitalLibrarySectionOneImgWidth}
                height={DigitalLibraryContent.DigitalLibrarySectionOneImgHeight}/>
        </div>
        <div className="NGO-dl__sec1">
            <h3>
                {DigitalLibraryContent.DigitalLibrarySectionOneTitle}
            </h3>
            <h5>
                {DigitalLibraryContent.DigitalLibrarySectionOneSubTitle}
            </h5>
            <p>
                {DigitalLibraryContent.DigitalLibrarySectionOneTextBody}
            </p>
        </div>
    </div>
  )
}
