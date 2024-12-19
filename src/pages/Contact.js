import React, { useState } from 'react';
import './Contact.css'; // Optional if you want custom styles for the contact page
import { useSearchParams } from 'react-router-dom';

export default function Contact() {

  //  /contact?name=itvedant&email=help@itvedant.com
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('name'));
  console.log(searchParams.get('email'));
  
  


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the server or API here (this is a placeholder)
    console.log('Form submitted', formData);
    alert('Thank you for contacting us!');
  };

  return (
    <div className="contact-container">
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us! We would love to hear from you.</p>
        
        <div className="contact-details">
          <h3>Our Office</h3>
          <p><strong>Address:</strong> 123 My Shop St., City, Country</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> support@myshop.com</p>
        </div>
      </section>

      <section className="contact-form">
        <h3>Send us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              required
            />
          </div>
          <button type="submit">Send Message</button>
          {/* <button onClick={()=>setSearchParams({'name':'amit','email':'help@itvendant.com'})} type="submit">Send Message</button> */}

        </form>
      </section>
    </div>
  );
}
