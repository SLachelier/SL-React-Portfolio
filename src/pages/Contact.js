import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <p>Your messsage has been successfully sent. I will contact you soon!</p>
  );
};

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [result, showResult] = useState(false);
  const form = useRef();
  const contactStyles = `
  html {
    width: 100%;
    // height: 100vh;
  }
  `;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7s0vv9', 'template_d9zc7jg', form.current, 's41_lFhBIZEIPN-lF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  //hides the result
  setTimeout(() => {
    showResult(false)
  }, 5000);
  
  return (
    <div className="contact-form">
      <style>{contactStyles}</style>
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Full Name: 
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail Address: 
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number: 
          <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message: 
          <textarea type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
        </div>
        <button id="send-btn" type="submit" value="Send">Send</button>
      <div> {result ? <Result /> : null}</div>
      </form>
    </div>
    );
}

export default Contact;