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
              Email: <a href='mailto:info@backtoschool.ngo' title='Back To School NGO Send Email Link'> info@backtoschool.ngo</a>
            </p>
            <p>
              Call: <a href='tel:+2349060006734' title='Call Back To School NGO'> +234 906 000 6734</a>
            </p>
          </div>

          <div className='footer-social-wrapper'>
            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" title='Back To School NGO Instagram Link'><RiInstagramFill/></a>
            <a href='https://web.facebook.com/' target='_blank' rel="noreferrer" title='Back To School NGO Facebook Link'><RiFacebookCircleFill/></a>
            <a href='https://twitter.com/' target='_blank' rel="noreferrer" title='Back To School NGO Twitter Link'><RiTwitterFill/></a>
            <a href='https://api.whatsapp.com/send?phone=2349060006734&text=Hey!%20Back%20to%20School%20NGO%20Admin.%20I%20am%20...' target='_blank' rel="noreferrer" title='Back To School NGO WhatsApp Link'><RiWhatsappFill /></a>
          </div>

          <div className='footer-btns-wrapper'>
            <a href='./whatwedo' className='pri-btn'>Browse campaign</a>
            <a href='./getinvolved'>Get involved</a>
          </div>
        </div>
      </div>
      <div className='footer-credit'>
        <p>
          © BacktoSchool 2023 | All Rights Reserved | Designed by <a href='https://techduce.africa/' title='Techduce Africa Web Link'>Techduce Africa</a>
        </p>
      </div>
    </>
  )
}
