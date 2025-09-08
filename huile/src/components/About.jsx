import React from "react";
import refineryImg from "../assets/refinery.jpg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left: Text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            OilCo is a leading provider of petroleum and energy solutions,
            committed to powering growth across industries. Our mission is
            to deliver high-quality products and services while maintaining
            sustainability and innovation in the energy sector.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To fuel economic and social progress by delivering reliable,
                sustainable, and affordable energy solutions.
              </p>
            </div>
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted energy partner in Africa, driving
                innovation and clean energy adoption for a brighter future.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="about-image">
          <img src={refineryImg} alt="Oil refinery" />
        </div>
      </div>
    </section>
  );
}
