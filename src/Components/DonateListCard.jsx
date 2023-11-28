import React from 'react'
import '../Stylesheet/DonatePage.css'

export default function DonateListCard(props) {
  return (
    <div className='donate__list__card'>
        <span>
            {props.price}
        </span>
        <p>
            {props.details}
        </p>
    </div>
  )
}
