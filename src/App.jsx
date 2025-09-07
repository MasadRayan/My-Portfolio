import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ExperienceSection from "./sections/ExperienceSection";
import { Particles } from "./components/Particles";

const App = () => {
  return (
    <div className="relative">
      {/* Particles background */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={2000}
        ease={20}
        color="#ffffff"
        staticity={10} 
        refresh
      />

      {/* Navbar & Hero: keep particles hidden by giving solid bg */}
      <div className="relative z-[999] bg-black">
        <Navbar />
        <Hero />
      </div>

      {/* Rest of site: particles visible in background */}
      <div className="relative z-10">
        <About />
        <Projects />
        <ExperienceSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
