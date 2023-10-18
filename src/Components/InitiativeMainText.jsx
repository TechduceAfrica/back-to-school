import React from 'react'
import "../Stylesheet/Initiative.css"

export default function InitiativeMainText(props) {
  return (
    <div className='init-main-text content-gap content-grid'>
        <h3>{props.imttitle}</h3>
        <p>{props.imttext}</p>
    </div>
  )
}
