import React, { useRef } from 'react';
import '../assets/css/Contact.css'; // Import your Contact.css file here
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_szpnc1b', 'template_o1vdt9f', form.current, '4ODZvlFvJhZT5bOXY')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
            }, (error) => {
                console.error('Failed to send email:', error.text);
            });

        form.current.reset();
    };

    return (
        <div className="contact-container">

            <h1 className="contact-header">Contact Us</h1>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
