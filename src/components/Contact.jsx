import React, {useState, useEffect} from 'react';
import '../assets/css/Contact.css';
import '../assets/css/Home.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const storedEmails = localStorage.getItem('emails');
        if (storedEmails) {
            setEmails(JSON.parse(storedEmails));
        }
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmails = [...emails, formData];
        setEmails(newEmails);
        localStorage.setItem('emails', JSON.stringify(newEmails));
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        console.log(newEmails)

    };

    return (
        <div className="contact-container">
            <div className={"contact-header"}>
                <h1 className={"contact-us-header"}>Contact Us</h1>
            </div>
            <div className="row">
                <div className="column">
                    <div className="logo-number-img">
                        <img src="/public/logo-number.png" alt="logo-number"/>
                    </div>
                </div>

                <div className={"column"}>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    autoComplete="off"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete="off"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    autoComplete="off"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
