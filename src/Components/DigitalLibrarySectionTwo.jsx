import React from 'react';

export default function DigitalLibrarySectionTwo(props) {
  return (
    <div className='NGO-dl__section-two'>
        <div>
            <h3>
                {props.DLSectionTwoTitle}
            </h3>
        </div>
        <div className="NGO-dl__sec2__box">
            <h4>
                {props.DLSectionTwoBoxTitleOne}
            </h4>
            <p>
                {props.DLSectionTwoBoxTextOne}
            </p>
        </div>
        <div className="NGO-dl__sec2__box">
            <h4>
                {props.DLSectionTwoBoxTitleTwo}
            </h4>
            <p>
                {props.DLSectionTwoBoxTextTwo}
            </p>
        </div>
        <div className="NGO-dl__sec2__box">
            <h4>
                {props.DLSectionTwoBoxTitleThree}
            </h4>
            <p>
                {props.DLSectionTwoBoxTextThree}
            </p>
        </div>
    </div>
  )
}
