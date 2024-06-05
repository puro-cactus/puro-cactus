import React from 'react';
import '../assets/css/Contact.css';
import '../assets/css/Home.css';
function Contact() {
    return (
        <div className="contact-container">
            <div className={"row"}>
                <div className={"column"}>
                  <div className={"logo-number-img"}>
                      <img src="/public/logo-number.png" alt="logo-number"/>
                  </div>
                </div>
            </div>
            <h1>Contact Us</h1>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
