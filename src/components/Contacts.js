import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-container">
        <p className="contact-info">
          📍 Peter Eka Street, after Integrity Hospital, Ikom, Cross River
        </p>
        <p className="contact-info">
          📞 0800-000-0000 | ✉️ info@nccfikom.org
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;