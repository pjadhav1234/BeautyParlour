import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Hero.css"; // import css

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <h1 className="display-4 fw-bold">
          Elegance comes from being as beautiful inside as outside
        </h1>
        <p className="lead mt-3">
          Eleifend arcu non lorem justo in tempus purus gravida. Est tortor egestas sed feugiat elementum.
        </p>
        
      </Container>
    </div>
  );
};

export default Hero;
