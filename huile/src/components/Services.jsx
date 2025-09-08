import React from "react";
import { FaTruck, FaOilCan, FaBolt, FaWarehouse } from "react-icons/fa"; // install react-icons

const services = [
  {
    title: "Fuel Distribution",
    desc: "Supplying premium fuels for commercial, industrial, and domestic needs.",
    icon: <FaTruck className="service-icon" />,
  },
  {
    title: "Lubricants",
    desc: "High-performance oils and lubricants designed to keep engines running smoothly.",
    icon: <FaOilCan className="service-icon" />,
  },
  {
    title: "Energy Solutions",
    desc: "Providing reliable power generation and sustainable renewable energy solutions.",
    icon: <FaBolt className="service-icon" />,
  },
  {
    title: "Logistics",
    desc: "Efficient transportation, warehousing, and storage of petroleum products.",
    icon: <FaWarehouse className="service-icon" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          We deliver top-tier energy and petroleum services with a focus on quality, efficiency, and sustainability.
        </p>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
