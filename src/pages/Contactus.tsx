import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ContactUsProps {}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactUs: React.FC<ContactUsProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Header />
      <div className="contact-us-header">
        <h1>Get in touch</h1>
        <p>
          Our team understands that each cybersecurity challenge is unique. Contact us to discuss your specific needs,
          and we'll tailor a solution that fits your requirements.
        </p>
      </div>
      <form onSubmit={handleSubmit} className='contact-us-form'>
        <div className="form-div">
          <label htmlFor="fullName">Full name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-div">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-div">
          <label htmlFor="message">Write a message to us</label>
          <textarea
            id="message"
            name="message"
            cols={30}
            rows={10}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactUs;
