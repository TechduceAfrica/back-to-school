import React from 'react'

export default function InitiativeWhatWeDoSection(props) {
  return (
    <div>
        <div>
            <h4>What We Do</h4>
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
