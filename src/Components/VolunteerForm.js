import React, { useState } from 'react';
import './ContactPageForm.css';

export default function VolunteerForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !message) {
        setErrorMessage('Please enter your name and message');
        } else {
        setIsSubmitted(true);
        setErrorMessage('');
        // Netlify form submission code here
        }
    };


  return (
    <>

        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-input">
                <input
                    type="text"
                    id="name"
                    className={`contact-form-field ${name ? 'not-empty' : ''}`}
                    value={name}
                    placeholder='e.g (John Doe)'
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <label htmlFor="name" className="contact-form-label">
                    Name
                </label>
            </div>

            <div className="contact-form-input">
                <input
                    type="tel"
                    id="phone"
                    className={`contact-form-field ${phoneNumber ? 'not-empty' : ''}`}
                    value={phoneNumber}
                    placeholder='e.g (08012345678)'
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
                    required
                />
                <label htmlFor="phone" className="contact-form-label">
                    Phone Number
                </label>
            </div>

            <div className="contact-form-input">
                <input
                    type="email"
                    id="email"
                    className={`contact-form-field ${email ? 'not-empty' : ''}`}
                    value={email}
                    placeholder='e.g (email@email.com)'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="email" className="contact-form-label">
                    Email
                </label>
            </div>

            <div className="contact-form-input">
                <textarea
                    id="message"
                    className={`contact-form-field ${message ? 'not-empty' : ''}`}
                    value={message}
                    placeholder='How/wht will you like to volunteer'
                    rows={4}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                ></textarea>
                <label htmlFor="message" className="contact-form-label">
                    Message
                </label>
            </div>

            <button type="submit" className="contact-form-submit">
            Submit
            </button>
            
            {errorMessage && (
            <div className="contact-form-error-message">{errorMessage}</div>
            )}
            {isSubmitted && (
            <div className="contact-form-success-message">
                Thank you for your message!
            </div>
            )}
        </form>

    </>
  )
}