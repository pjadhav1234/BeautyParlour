import React from "react";
import "./testimonial.css";

const testimonials = [
  {
    name: "Sophia Johnson",
    role: "Regular Client",
    text: "Absolutely love this parlour! The staff are professional and friendly, and I always leave feeling refreshed and beautiful.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Emily Brown",
    role: "Bride",
    text: "They did my bridal makeup and it was flawless. The compliments never stopped throughout the day. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Olivia Smith",
    role: "Spa Enthusiast",
    text: "Best spa experience ever! Relaxing ambiance, amazing treatments, and top-notch service. Definitely coming back.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <div>
                <h3>{t.name}</h3>
                <p className="role">{t.role}</p>
              </div>
            </div>
            <p className="testimonial-text">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
