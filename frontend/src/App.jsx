import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonilal";
import ServicePage from "./components/servicePage.jsx";
import About from "./components/AboutUsPage.jsx";
import Contact from "./components/contactuspage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Testimonials />
            <Footer />
          </>
        } />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
