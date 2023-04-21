import React from 'react';

export default function Form() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    })
      .then(() => console.log('Form submission successful'))
      .catch((error) =>
        console.error('Form submission error:', error)
      );
  };

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='test-form' value='contact' />

        <div>
          <label>Name <br />
            <input type='text' name="name" id="name" />
          </label>
        </div>

        <div>
          <label htmlFor='email'>Email <br />
            <input type='email' name="email" id="email" />
          </label>
        </div>

        <div>
          <label>Message <br />
            <textarea name="message" id="message" />
          </label>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
}

