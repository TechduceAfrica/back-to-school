import React from 'react';
import { NavLink } from 'react-router-dom';
import './Btn.css';

export default function SecondaryBtn(props) {
  return (
    <>
        <div className='secondary-btn-wrapper'>
            <NavLink to={props.btnlink} target='_self' rel='noreferrer'>{props.btntext}</NavLink>
        </div>
    </>
  )
}
