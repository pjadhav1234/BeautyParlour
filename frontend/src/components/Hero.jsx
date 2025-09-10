import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Hero.css"; // import css

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <h1 className="display-4 fw-bold">
          Elegance isn’t just about how you look
        </h1>
        <p className="lead mt-3">
         it’s about how you feel. At our salon, we believe true beauty shines when confidence and care come together.
        </p>
        
      </Container>
    </div>
  );
};

export default Hero;
