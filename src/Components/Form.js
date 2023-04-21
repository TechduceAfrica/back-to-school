import React from 'react';

const submit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => console.log('Form submitted successfully!'))
    .catch((error) => console.error(error));
  };

export default function Form() {
  return (
    <>
        <form 
            name="form v1" 
            method="post" 
            data-netlify="true" 
            onSubmit={submit}
        >

            <input type='hidden' name='test-form' value='form v1' />
            
            <div>
                <label>Name <br />
                    <input type='text' name="name" id="name"  />
                </label>
            </div>

            <div>
                <label htmlFor='email'>Email <br />
                    <input type='email' name="email" id="email"  />
                </label>
            </div>

            <div>
                <label>Message <br />
                    <input type='textarea' name="message" id="message"  />
                </label>
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </>
  )
}
