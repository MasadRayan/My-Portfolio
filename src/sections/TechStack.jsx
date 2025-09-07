import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { techStackIcons, techStackImgs } from '../constants';
import TechIcon from '../components/TechIcon';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Technical Skills"
          sub="The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {isMobile
            ? techStackImgs.map((icon, index) => (
                <div
                  key={index}
                  className="tech-card card-border etch-card overflow-hidden group xl:rounded-full rounded-lg"
                >
                  <div className="text-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <img className="max-w-[120px]" src={icon.imgPath} alt={icon.name} />
                    </div>
                    <div className="text-2xl text-white-50 text-center pb-10 w-full px-5 md:px-10 font-bold">
                      {icon.name}
                    </div>
                  </div>
                </div>
              ))
            : techStackIcons.map((icon, index) => (
                <div
                  key={index}
                  className="tech-card card-border etch-card overflow-hidden group xl:rounded-full rounded-lg"
                >
                  <div className="text-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <TechIcon model={icon} />
                    </div>
                    <div className="text-2xl text-white-50 text-center pb-10 w-full px-5 md:px-10 font-bold">
                      {icon.name}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
