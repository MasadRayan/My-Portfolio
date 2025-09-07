import { useEffect, useState } from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer bg-[#] relative z-[999]">
      <div className="footer-container ">
        {/* Local time */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-start">
            Local Time: &nbsp;&nbsp;
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
          </p>
        </div>

        {/* Socials */}
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.link} target="_blank" key={index}>
              <div className="icon">
                <img src={socialImg.imgPath} alt="social icon" />
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          © {new Date().getFullYear()} Masad Rayan. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
