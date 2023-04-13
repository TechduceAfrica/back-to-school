import React from 'react';
import './Footer.css';
import { RiInstagramFill, RiFacebookCircleFill, RiTwitterFill, RiWhatsappFill } from "react-icons/ri";

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
            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><RiInstagramFill/></a>
            <a href='https://web.facebook.com/' target='_blank' rel="noreferrer"><RiFacebookCircleFill/></a>
            <a href='https://twitter.com/' target='_blank' rel="noreferrer"><RiTwitterFill/></a>
            <a href='https://whatsapp.com/' target='_blank' rel="noreferrer"><RiWhatsappFill /></a>
          </div>

          <div className='footer-btns-wrapper'>
            <a href='./whatwedo' className='pri-btn'>Browse campaign</a>
            <a href='./getinvoved'>Get involved</a>
          </div>
        </div>
      </div>
    </>
  )
}
