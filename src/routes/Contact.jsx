import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gx8pb8t",
        "template_zko7t0e",
        form.current,
        "Hj3wbed7drCfy6-ig"
      )
      .then(
        () => {
          alert("Email sent successfully 😊");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Email send error:", error?.text || error);
        }
      );
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-center-container">
        <div className="contact-card">
          <h1 className="contact-title">Let’s Build Something</h1>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              id="name"
              name="from_name"
              className="contact-input"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="from_email"
              className="contact-input"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              id="message"
              name="message"
              className="contact-textarea"
              placeholder="Your Message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contact-btn">
              ✉️ Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
