import React from 'react'

export default function InitiativeWhatWeDoSection(props) {
  return (
    <div className='init-wwd-sec'>
        <div>
            <h3>What We Do</h3>
            <p>{props.iwdstext}</p>
            <ul>
                <li>{props.iwdslistone}</li>
                <li>{props.iwdslisttwo}</li>
                <li>{props.iwdslistthree}</li>
            </ul>
        </div>
        <div>
            <img src={props.iwdssrc} alt={props.iwdsalt} title={props.iwdsalt} width={props.iwdswidth} height={props.iwdsheight} />
        </div>
    </div>
  )
}
