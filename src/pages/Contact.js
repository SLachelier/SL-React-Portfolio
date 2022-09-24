import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactStyles = `
  html {
    width: 100vw;
    height: 100vh;
  }
  `;
  
  return (
    <div className="contact-form">
    <style>{contactStyles}</style>
      <h1>Contact</h1>
      <form>
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
          <label htmlFor="message">Message: 
          <input type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
        </div>
        <button id="send-btn" type="submit">Send</button>
      </form>
    </div>
    );
}

export default Contact;