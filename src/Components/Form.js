import React from 'react'

export default function Form() {
  return (
    <>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
        </form>

        <form name="contact" method="post" netlify >
            <div>
                <label>Name</label>
                <input type='text' name="name" id="name"  />
            </div>

            <div>
                <label>Email</label>
                <input type='email' name="email" id="email"  />
            </div>

            <div>
                <label>Message</label>
                <input type='textarea' name="message" id="message"  />
            </div>

            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    </>
  )
}
