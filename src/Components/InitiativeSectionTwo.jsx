import React from 'react'

export default function InitiativeSectionTwo(props) {
  return (
    <div className='init-sectwo '>
        <div>
            <h3>{props.isttitle}</h3>
            <a href='./getinvolved'  target='_self' rel='noreferrer'>{props.btntext}</a>
        </div>
        <div>
            <div className="init-sectwo-box">
                <h4>{props.boxtitleone}</h4>
                <p>{props.boxtextone}</p>
            </div>
            <div className="init-sectwo-box">
                <h4>{props.boxtitletwo}</h4>
                <p>{props.boxtexttwo}</p>
            </div>
            <div className="init-sectwo-box">
                <h4>{props.boxtitlethree}</h4>
                <p>{props.boxtextthree}</p>
            </div>
        </div>
    </div>
  )
}
