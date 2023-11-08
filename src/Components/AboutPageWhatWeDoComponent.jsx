import React from 'react'
import './AboutPageWhatWeDoComponent.css';

export default function AboutPageWhatWeDoComponent(props) {
  return (
    <>
        <div className='about-what-we-do-section-wrapper'>
            <div className='about-what-we-do-left'>
                <h4>{props.wwdsubtitle}</h4>
                <h3>{props.wwdtitle}</h3>
                <p>
                    {props.wwdtext}
                </p>
            </div>

            <div className='about-what-we-do-right'>
                <div>
                    <p>
                        {props.wwdboxone}
                    </p>
                </div>
                <div>
                    <p>
                        {props.wwdboxtwo}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
