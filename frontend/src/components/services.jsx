import React from "react";
import "./services.css";
import facial from "../assets/facial.png";
import haircut from "../assets/hair_style.png";
import manicure from "../assets/manicure_pedicure.png";
import treatment from "../assets/treatment.jpg";

const servicesData = [
  { title: "Haircut & Styling", desc: "Trendy cuts & styles for all", img: haircut },
  { title: "Facial", desc: "Rejuvenate & refresh your skin", img: facial },
  { title: "Manicure & Pedicure", desc: "Pamper your hands & feet", img: manicure },
];

const treatmentsData = [
  { title: "Bridal Makeup", price: "₹5000" },
  { title: "Hair Spa", price: "₹1200" },
  { title: "Detox Facial", price: "₹1500" },
  { title: "Classic Pedicure", price: "₹800" },
];

const Services = () => {
  return (
    <div className="beauty-services-enhanced">
      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Discover a wide range of beauty treatments crafted just for you ✨
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-img-wrapper">
                <img src={service.img} alt={service.title} className="service-img" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider with Parallax */}
      <div className="parallax-divider">
        <div className="overlay">
          <h2>Enhance Your Beauty, Enhance Your Confidence 💖</h2>
        </div>
      </div>

      {/* Treatments Section */}
      <section className="treatments-wrapper">
        <div className="treatments-left">
          <img
          src={treatment}
            alt="Treatments"
            className="treatments-main-img"
          />
        </div>
        <div className="treatments-right">
          <h2 className="section-title">Treatments & Prices</h2>
          <ul className="pricing-list">
            {treatmentsData.map((treat, index) => (
              <li key={index}>
                {treat.title} — <strong>{treat.price}</strong>
              </li>
            ))}
          </ul>
          <div className="view-all">View all →</div>
        </div>
      </section>

      {/* Divider with Parallax */}
      <div className="parallax-divider">
        <div className="overlay">
            <h2>Because You Deserve the Best Care 💆‍♀️💅</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
