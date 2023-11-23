import React from 'react'
import '../Stylesheet/GetInvolved.css'

export default function GetInvolvedSectionFour(props) {
  return (
    <div className='get__involved__sec__4'>
        <span>{props.gisfNumber}</span>
        <h4>{props.gisfTopic}</h4>
        <p>{props.gisfBody}</p>
    </div>
  )
}
