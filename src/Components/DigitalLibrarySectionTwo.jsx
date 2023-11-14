import React from 'react';
import DigitalLibraryContent from '../Contents/DigitalLibrary';

export default function DigitalLibrarySectionTwo() {
  return (
    <div className='NGO-dl__section-two'>
        <div>
            <h3>
                {DigitalLibraryContent.DigitalLibrarySectionTwoTitle}
            </h3>
        </div>
        <div className="NGO-dl__sec2__box">
            <h4>
                {DigitalLibraryContent.DigitalLibrarySectionTwoBoxTitleOne}
            </h4>
            <p>
                {DigitalLibraryContent.DigitalLibrarySectionTwoBoxTextOne}
            </p>
        </div>
        <div className="NGO-dl__sec2__box">
            <h4>
                {DigitalLibraryContent.DigitalLibrarySectionTwoBoxTitleTwo}
            </h4>
            <p>
                {DigitalLibraryContent.DigitalLibrarySectionTwoBoxTextTwo}
            </p>
        </div>
        <div className="NGO-dl__sec2__box">
            <h4>
                {DigitalLibraryContent.DigitalLibrarySectionTwoBoxTitleThree}
            </h4>
            <p>
                {DigitalLibraryContent.DigitalLibrarySectionTwoBoxTextThree}
            </p>
        </div>
    </div>
  )
}
