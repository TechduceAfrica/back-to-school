import React from "react";
// import React, { useState } from 'react';
// import axios from 'axios';

export default function Form() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   const formData = new FormData();
  //   formData.append('from', `${name} <${email}>`);
  //   formData.append('to', 'adewale.techduce@gmail.com');
  //   formData.append('subject', `Message from ${name}`);
  //   formData.append('text', message);
  
  //   axios.post('https://api.mailgun.net/v3/sandbox7051a2cd357a41f9893a67a62fbe9ed5.mailgun.org', formData, {
  //     auth: {
  //       username: 'api',
  //       password: 'a045f827220062c9ffd424c61e70f073-70c38fed-86c826d9'
  //     }
  //   })
  //   .then(response => {
  //     console.log('Email sent:', response.data);
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //     const notificationFormData = new FormData();
  //     notificationFormData.append('from', 'Your Name <your-email@example.com>');
  //     notificationFormData.append('to', 'adewale.techduce@gmail.com');
  //     notificationFormData.append('subject', 'Form Filled');
  //     notificationFormData.append('text', `The form has been filled by ${name} (${email})`);
  
  //     axios.post('https://api.mailgun.net/v3/sandbox7051a2cd357a41f9893a67a62fbe9ed5.mailgun.org', notificationFormData, {
  //       auth: {
  //         username: 'api',
  //         password: 'a045f827220062c9ffd424c61e70f073-70c38fed-86c826d9'
  //       }
  //     })
  //     .then(response => {
  //       console.log('Email notification sent:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error sending email notification:', error);
  //     });
  //   })
  //   .catch(error => {
  //     console.error('Error sending email:', error);
  //   });
  // };
  

  return (
    <>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeB-pD9gREqGzGvxv2bNs19BlWW-k46lK1RCWJH8QHSadIRgA/viewform?embedded=true" width="640" height="450" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <br />
            <input type='text' name='name' id='name' value={name} onChange={handleNameChange} />
          </label>
        </div>

        <div>
          <label htmlFor='email'>
            Email
            <br />
            <input type='email' name='email' id='email' value={email} onChange={handleEmailChange} />
          </label>
        </div>

        <div>
          <label>
            Message
            <br />
            <textarea name='message' id='message' value={message} onChange={handleMessageChange} />
          </label>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form> */}
    </>
  );
}
