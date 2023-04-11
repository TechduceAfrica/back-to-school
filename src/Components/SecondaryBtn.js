import React from 'react';
import './Btn.css';

export default function SecondaryBtn(props) {
  return (
    <>
        <div className='secondary-btn-wrapper'>
            <a href={props.btnlink} target='_self' rel='noreferrer'>{props.btntext}</a>
        </div>
    </>
  )
}
