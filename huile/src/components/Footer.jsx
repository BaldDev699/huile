import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} OilCo. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://x.com/home" aria-label="X" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://wa.me/" aria-label="WhatsApp" target="_blank">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
