import React from 'react'
import DigitalLibraryContent from '../Contents/DigitalLibrary'

export default function DigitalLibrarySectionThree() {
  return (
    <div  className='NGO__dl__sec3'>
        <div>
            <h3>
                {DigitalLibraryContent.DigitalLibrarySectionThreeTitle}
            </h3>
        </div>
        <div className='NGO__dl__sec3-content'>
            <div>
                <details>
                    <summary>{DigitalLibraryContent.DigitalLibrarySectionThreeTitleOne}</summary>
                    <p>{DigitalLibraryContent.DigitalLibrarySectionThreeTextOne}</p>
                </details>
                <details>
                    <summary>{DigitalLibraryContent.DigitalLibrarySectionThreeTitleTwo}</summary>
                    <p>{DigitalLibraryContent.DigitalLibrarySectionThreeTextTwo}</p>
                </details>
                <details>
                    <summary>{DigitalLibraryContent.DigitalLibrarySectionThreeTitleThree}</summary>
                    <p>{DigitalLibraryContent.DigitalLibrarySectionThreeTextThree}</p>
                </details>
                <details>
                    <summary>{DigitalLibraryContent.DigitalLibrarySectionThreeTitleFour}</summary>
                    <p>{DigitalLibraryContent.DigitalLibrarySectionThreeTextFour}</p>
                </details>
                <details>
                    <summary>{DigitalLibraryContent.DigitalLibrarySectionThreeTitleFive}</summary>
                    <p>{DigitalLibraryContent.DigitalLibrarySectionThreeTextFive}</p>
                </details>
            </div>
            <div>
                <img 
                    src={DigitalLibraryContent.DigitalLibrarySectionThreeImg} 
                    alt={DigitalLibraryContent.DigitalLibrarySectionThreeImgAlt}
                    title={DigitalLibraryContent.DigitalLibrarySectionThreeImgAlt}
                    width={DigitalLibraryContent.DigitalLibrarySectionThreeImgWidth}
                    height={DigitalLibraryContent.DigitalLibrarySectionThreeImgHeight} />
            </div>
        </div>
    </div>
  )
}
