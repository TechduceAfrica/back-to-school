import React from 'react'

export default function DigitalLibrarySectionThree(props) {
  return (
    <div  className='NGO__dl__sec3'>
        <div>
            <h3>
                {props.DLSectionThreeTitle}               
            </h3>
        </div>
        <div className='NGO__dl__sec3-content'>
            <div>
                <details name="accordion">
                    <summary>{props.DLSectionThreeTitleOne}</summary>
                    <p>{props.DLSectionThreeTextOne}</p>
                </details>
                <details name="accordion">
                    <summary>{props.DLSectionThreeTitleTwo}</summary>
                    <p>{props.DLSectionThreeTextTwo}</p>
                </details>
                <details name="accordion">
                    <summary>{props.DLSectionThreeTitleThree}</summary>
                    <p>{props.DLSectionThreeTextThree}</p>
                </details>
                <details name="accordion">
                    <summary>{props.DLSectionThreeTitleFour}</summary>
                    <p>{props.DLSectionThreeTextFour}</p>
                </details>
                <details name="accordion">
                    <summary>{props.DLSectionThreeTitleFive}</summary>
                    <p>{props.DLSectionThreeTextFive}</p>
                </details>
            </div>
            <div>
                <img 
                    src={props.DLSectionThreeImg} 
                    alt={props.DLSectionThreeImgAlt}
                    title={props.DLSectionThreeImgAlt}
                    width={props.DLSectionThreeImgWidth}
                    height={props.DLSectionThreeImgHeight} />
            </div>
        </div>
    </div>
  )
}
