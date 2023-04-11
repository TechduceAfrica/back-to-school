import React from 'react';
import './Btn.css';

export default function PrimaryBtn(props) {
  return (
    <>
        <div className='primary-btn-wrapper'>
            <a href={props.btnlink} target='_self' rel='noreferrer'>{props.btntext}</a>
        </div>
    </>
  )
}
