import React from 'react';
import './ContactMainSection.css';
import ContactPageForm from './ContactPageForm';
import { RiInstagramFill, RiFacebookCircleFill, RiTwitterFill, RiWhatsappFill } from "react-icons/ri";

export default function ContactMainSection() {
  return (
    <>
        <div className='contact-main-section-wrapper'>
            <div className='contact-main-section-left'>
                <h3>
                    Get in touch
                </h3>

                <div>
                    <p>
                        If you would like to get in touch, enter your details in the form and we'll get back to you as soon as we can.
                    </p>
                    <p>
                        Have a general inquiry? <br/> Email us at info@backtoschool.ngo
                    </p>
                    <p>
                        Text or call us to get involved in education advocates: <br/> <a href='tel:+2349012345678'>+234 901 234 5678</a>
                    </p>
                </div>

                <div className='contact-social-wrapper'>
                    <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><RiInstagramFill/></a>
                    <a href='https://web.facebook.com/' target='_blank' rel="noreferrer"><RiFacebookCircleFill/></a>
                    <a href='https://twitter.com/' target='_blank' rel="noreferrer"><RiTwitterFill/></a>
                    <a href='https://whatsapp.com/' target='_blank' rel="noreferrer"><RiWhatsappFill /></a>
                </div>
            </div>
            <div className='contact-main-section-right'>
                <ContactPageForm />
            </div>
        </div>
    </>
  )
}
