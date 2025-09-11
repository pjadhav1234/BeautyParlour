import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/services.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonilal.jsx";
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
            
          </>
        } />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
