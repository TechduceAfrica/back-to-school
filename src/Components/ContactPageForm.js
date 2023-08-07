import React, { useState } from "react";
import "./ContactPageForm.css";
import { createClient } from "@supabase/supabase-js";

export default function VolunteerForm() {
  const supabaseUrl = "https://ipntqfirnsrtjvbcyrol.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwbnRxZmlybnNydGp2YmN5cm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5Njg2MzcsImV4cCI6MTk5NzU0NDYzN30.DBKtij1d3IMKCF6rez9GsAes8uBBTi0RR8r8b73bDnU";

  const supabase = createClient(supabaseUrl, supabaseKey);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !message) {
      setErrorMessage("Please enter your name and message");
    } else {
      setIsSubmitted(true);
      console.log(isSubmitted);
      const date = new Date();
      const timeStamp = date;

      setErrorMessage("");
      console.log("Name: ", name);
      console.log("Phone Number: ", phoneNumber);
      console.log("Email: ", email);
      console.log("Message: ", message);
      console.log("TimeStamp: ", timeStamp);

      const data = { name, phoneNumber, email, message, timeStamp };

      try {
        const { data, error } = await supabase
          .from("Contact Page Form")
          .insert({ name, phone_number: phoneNumber, email, message });

        if (error) {
          throw error;
        }

        console.log("Data inserted successfully:", data);
      } catch (error) {
        console.error("Error inserting data:", error);
      }

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
    <div>
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        name="Contact_Page_Form"
      >
        <div className="contact-form-input">
          <input
            type="text"
            id="name"
            className={`contact-form-field ${name ? "not-empty" : ""}`}
            value={name}
            placeholder="e.g (John Doe)"
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
            className={`contact-form-field ${phoneNumber ? "not-empty" : ""}`}
            value={phoneNumber}
            placeholder="e.g (08012345678)"
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
            className={`contact-form-field ${email ? "not-empty" : ""}`}
            value={email}
            placeholder="e.g (email@email.com)"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="email" className="contact-form-label">
            Email
          </label>
        </div>
        <div className="contact-form-input">
          <textarea
            id="message"
            className={`contact-form-field ${message ? "not-empty" : ""}`}
            value={message}
            placeholder="Your message/inquires goes here"
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
        {/* submit error message or success message */}
        {errorMessage && (
          <div className="contact-form-error-message">{errorMessage}</div>
        )}
        {isSubmitted && (
          <div className="contact-form-success-message">
            Thank you for your message!
          </div>
        )}
      </form>
    </div>
  );
}
