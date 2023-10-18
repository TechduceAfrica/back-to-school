import React from 'react'

export default function InitiativeSectionOne(props) {
  return (
    <div className='bts-init-hero'>
        <div className="bts-init-hero-img">
            <img src={props.bihsrc} alt={props.bihalt} title={props.bihalt} width={props.bihwidth} height={props.bihheight} />
        </div>
        <div className="bts-init-hero-text content-gap content-grid">
            <h3>{props.bihtitle}</h3>
            <p>{props.bihtext}</p>
        </div>
    </div>
  )
}
