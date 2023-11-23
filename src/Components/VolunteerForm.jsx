import React, { useState } from 'react';
import '../Stylesheet/VolunteerForm.css';

export default function VolunteerForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!name || !message) {
            setErrorMessage('Please enter your name and message');
        } else {
            setIsSubmitted(true);
            console.log(isSubmitted);
            const date = new Date();
            const timeStamp = date;

            setErrorMessage('');
            console.log("Name: ", name);
            console.log("Phone Number: ", phoneNumber);
            console.log("Email: ", email);
            console.log("Location: ", location);
            console.log("Message: ", message);

            const data = { name, phoneNumber, email, location, message, timeStamp };
    
            const postData = async (data) => {
                try {
                  const submit = await fetch(
                    "https://bts-mailserver.onrender.com/form-submitted",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      body: JSON.stringify(data),
                    }
                  );
                  const result = await submit.json();
                  console.log(result);
                  // if (result.status === 200) {
                  //   console.log(result.status);
                  // }
                } catch (error) {
                  console.log(error);
                }
              };
        
              postData(data);
        }
    };

  return (
    <>

        <form className="volunteer-form" onSubmit={handleSubmit} name="VolunteerForm" autocomplete="on">
            <div className="volunteer-form-wrapper">
                <div className="volunteer-form-input">
                    <label htmlFor="name" className="volunteer-form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className={`volunteer-form-field ${name ? 'not-empty' : ''}`}
                        value={name}
                        placeholder='e.g (John Doe)'
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>

                <div className="volunteer-form-input">
                    <label htmlFor="phone" className="volunteer-form-label">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className={`volunteer-form-field ${phoneNumber ? 'not-empty' : ''}`}
                        value={phoneNumber}
                        placeholder='e.g (08012345678)'
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
                        required
                    />
                </div>

                <div className="volunteer-form-input">
                    <label htmlFor="email" className="volunteer-form-label">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={`volunteer-form-field ${email ? 'not-empty' : ''}`}
                        value={email}
                        placeholder='e.g (email@email.com)'
                        onChange={(event) => setEmail(event.target.value)}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    />
                </div>

                <div className="volunteer-form-input">
                    <label htmlFor="location" className="volunteer-form-label">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        className={`volunteer-form-field ${name ? 'not-empty' : ''}`}
                        value={location}
                        placeholder='e.g (Lagos, Nigeria)'
                        onChange={(event) => setLocation(event.target.value)}
                        required
                    />
                </div>

                <div className="volunteer-form-input">
                    <label htmlFor="message" className="volunteer-form-label">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className={`volunteer-form-field ${message ? 'not-empty' : ''}`}
                        value={message}
                        placeholder='How/what will you like to volunteer'
                        rows={4}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                    ></textarea>
                </div>
            </div>

            <button type="submit" className="volunteer-form-submit">
                Submit
            </button>
            
            {errorMessage && (
            <div className="volunteer-form-error-message">{errorMessage}</div>
            )}
            {isSubmitted && (
            <div className="volunteer-form-success-message">
                Thank you for your message!
            </div>
            )}
        </form>
        

    </>
  )
};
