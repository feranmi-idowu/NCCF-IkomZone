import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-4">📍 Peter Eka Street, after Integrity Hospital, Ikom, Cross River</p>
        <p className="mb-4">📞 0800-000-0000 | ✉️ info@nccfikom.org</p>
        <form className="grid gap-4 text-left">
          <input type="text" placeholder="Your Name" className="border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="border p-2 rounded" />
          <textarea placeholder="Message" className="border p-2 rounded" rows="4"></textarea>
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;