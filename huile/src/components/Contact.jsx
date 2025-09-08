import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <p>
        Have questions or want to work with us? Fill out the form below and we’ll get back to you as soon as possible.
      </p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}
