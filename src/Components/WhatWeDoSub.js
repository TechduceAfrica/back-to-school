import React from 'react';
import './WhatWeDoSub.css';

export default function WhatWeDoSub(props) {
  return (
    <>
        <div className='whatwedosub-single-wrapper'>
            <div className='whatwedosub-single-img-wrapper'>
                <img src={props.img} alt={props.title} />
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <a href='/whatwedo'  target='_self' rel='noreferrer'>know more</a>
        </div>
    </>
  )
}
