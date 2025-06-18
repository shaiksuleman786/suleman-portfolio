import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [responseMsg, setResponseMsg] = useState("");

  // Update form data
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/react-contact/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }).toString()
      });

      const text = await res.text();
      console.log("Response from PHP:", text);
      const data = JSON.parse(text);
      setResponseMsg(data.message);
    } catch (err) {
      console.error("Error:", err);
      setResponseMsg("Something went wrong.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title"><span className="contacts"> Contact </span> Me</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="input-field"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        {responseMsg && <p>{responseMsg}</p>}

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📧 Email: <span className="contacts"> shaiksuleman815@gmail.com </span></p>
          <p>📱 Phone: <span className="contacts"> +91-9381184819 </span></p>
          <p>📍 Location:<span className="contacts"> Chimakurthy City, India </span></p>
        </div>
      </div>
    </section>
  
  );
};

export default ContactUs;
