import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Projects() {
  const div1ref = useRef(null);
  const div2ref = useRef(null);
  const div3ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = [div1ref.current, div2ref.current, div3ref.current];

    cards.forEach((card) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          toggleActions: "play none none reverse", // remove reverse if you want it permanent
        },
      });

      // Animate children in order (image → h2 → p → spans → buttons)
      const image = card.querySelector("img");
      const title = card.querySelector("h2");
      const para = card.querySelector("p");
      const spans = card.querySelectorAll("span");
      const buttons = card.querySelectorAll("a");

      tl.from(image, { opacity: 0, x: -50, duration: 0.6, ease: "power3.out" })
        .from(title, { opacity: 0, y: 30, duration: 0.5 }, "-=0.3")
        .from(para, { opacity: 0, y: 30, duration: 0.5 }, "-=0.3")
        .from(spans, { opacity: 0, y: 20, duration: 0.4, stagger: 0.1 }, "-=0.2")
        .from(buttons, { opacity: 0, y: 20, duration: 0.4, stagger: 0.1 }, "-=0.2");
    });
  });

  return (
    <section id="projects">
      <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0192b0] via-[#5073f6] to-[#8b6efa] secton-padding">My Projects</h1>

      {/* Project 1 */}
      <div
        ref={div1ref}
        className="grid md:grid-cols-2 border border-[#2a0e61] rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto mt-5 p-4 md:p-8 "
      >
        {/* Left - Image */}
        <div className="relative w-full h-72 md:h-full">
          <img src="/assets/project1.png" alt="Skill Nova" className="w-full h-full object-cover" />
        </div>

        {/* Right - Content */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Skill Nova – <span className="text-indigo-400">E-Learning Platform</span>
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              A complete MERN stack e-learning platform with role-based dashboards for Students, Instructors, and Admins...
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full">React</span>
              <span className="bg-blue-500/100 text-white px-3 py-1 text-xs rounded-full">TailwindCSS</span>
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 text-xs rounded-full">Firebase Auth</span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs rounded-full">MongoDB</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6 relative z-10">
            <a
              href="https://skill-nova-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/MasadRayan/SkillNova-Client"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div
        ref={div2ref}
        className="grid md:grid-cols-2 gap-6 border border-[#2a0e61] rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto mt-5 p-4 md:p-8"
      >
        <div className="relative w-full h-72 md:h-full">
          <img src="/assets/project2.png" alt="Bookoro" className="w-full h-full object-cover" />
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Book Koro – <span className="text-indigo-400">Hotel Management Platform</span>
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              A complete MERN stack hotel management platform with role-based dashboards for Guests,
              Hotel Managers, and Admins. Guests can search hotels, check availability, make
              bookings, and manage reservations. Hotel Managers can add and update room details, set
              pricing, track occupancy, and handle customer requests. Admins oversee users, hotels,
              and transactions to ensure smooth operations. The app features secure authentication,
              real-time booking updates, payment integration, and a fully responsive design.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full">React</span>
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 text-xs rounded-full">Firebase Auth</span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs rounded-full">MongoDB</span>
              <span className="bg-gray-500/20 text-gray-300 px-3 py-1 text-xs rounded-full">Express.js</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">+4</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6 relative z-10">
            <a
              href="https://bookoro-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/MasadRayan/Bookoro-Client"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div
        ref={div3ref}
        className="grid md:grid-cols-2 gap-6 border border-[#2a0e61] rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto mt-5 p-4 md:p-8"
      >
        <div className="relative w-full h-72 md:h-full">
          <img src="/assets/project3.png" alt="Hobby Hive" className="w-full h-full object-cover" />
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Hobby Hive <span className="text-indigo-400">– Hobby Groups Platform</span>
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              HobbyHive is a full-stack MERN platform that helps people discover and manage their
              hobby groups. Users can register or log in using email, Google, or GitHub, with secure
              authentication and route protection. The app allows users to create, join, update, and
              delete groups while viewing all available ones. It features a responsive design with
              dark/light mode, animations, and interactive maps. The backend is powered by MongoDB
              with full CRUD operations, and the project is deployed using Netlify (client) and
              Vercel (server).
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full">React</span>
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 text-xs rounded-full">Firebase Auth</span>
              <span className="bg-blue-500/100 text-white px-3 py-1 text-xs rounded-full">TailwindCSS</span>
              <span className="bg-gray-500/20 text-gray-300 px-3 py-1 text-xs rounded-full">Express.js</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">+7</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6 relative z-10">
            <a
              href="https://tangerine-crostata-f1e467.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href="https://github.com/MasadRayan/HobbyHive-Client"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
