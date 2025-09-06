import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonilal";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
      </div>
    </>
  );
}

export default App;
