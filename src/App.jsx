import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ExperienceSection from "./sections/ExperienceSection";
import { Particles } from "./components/Particles";
import TechStack from "./sections/TechStack";
import { useMediaQuery } from "react-responsive";


const App = () => {

  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });

  // set particle count based on screen
  const particleQuantity = isMobile ? 300 : isTablet ? 1000 : 2000;
  return (
    <div className="relative">
      {/* Particles background */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={particleQuantity}
        ease={20}
        color="#ffffff"
        staticity={10} 
        refresh
      />

      {/* Navbar & Hero: keep particles hidden by giving solid bg */}
      <div className="relative z-[999]">
        <Navbar />
        <Hero />
      </div>

      {/* Rest of site: particles visible in background */}
      <div className="relative z-10">
        <About />
        <Projects />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
