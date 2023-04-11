import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className='footer-container'>
        <h2>Join our mission. Volunteer, Donate, Advocate. Get Started Today.</h2>
        <div className='footer-cta'>
          <div className='footer-contact-info'>
            <p>
              Email: <a href='mailto:info@backtoschool.ngo'> info@backtoschool.ngo</a>
            </p>
            <p>
              Call: <a href='tel:2349012345678'> +234 901 234 5678</a>
            </p>
          </div>

          <div className='footer-social-wrapper'>
            <a href='#' target='_blank'>Insta</a>
            <a href='#' target='_blank'>FB</a>
            <a href='#' target='_blank'>Twitter</a>
          </div>

          <div className='footer-btns-wrapper'>
            <a href='' className='pri-btn'>Browse campaign</a>
            <a href=''>Get involved</a>
          </div>
        </div>
      </div>
    </>
  )
}
