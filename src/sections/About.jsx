import React, { useRef } from 'react';
import masad from '/assets/masad.jpg';
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const About = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({ paused: true });

        // Animate image
        tl.fromTo(
            imgRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Animate text
        tl.fromTo(
            textRef.current.querySelectorAll(".lol"),
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
            },
            "-=0.7"
        );

        // Animate links
        tl.fromTo(
            textRef.current.querySelectorAll(".link"),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.2,
            },
            "-=0.3"
        );

        // ScrollTrigger to play/reverse every time
        ScrollTrigger.create({
            trigger: "#aboutMe",
            start: "top 80%",     // starts when section top is 80% down viewport
            end: "bottom 30%",    // ends when section bottom hits 30% from top
            onEnter: () => tl.restart(),  // play forward
            onLeaveBack: () => tl.reverse(), // play backward when scrolling up
            // markers: true, // set true for debugging
        });
    }, []);


    return (

        <section id='about' className='section-spacing'>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#0192b0] via-[#5073f6] to-[#8b6efa] bg-clip-text text-transparent text-center my-5 ">
                About me
            </h1>
            <section
                id="aboutMe"
                className="container flex flex-col md:flex-row items-center gap-10 border border-[#2a0e61] py-8 px-5 md:p-12 rounded-xl relative  mx-auto max-w-7xl mb-20"
            >
                {/* image */}
                <div ref={imgRef} className="md:w-[40%] flex justify-center">
                    <img
                        src={masad}
                        alt="profile"
                        className="md:w-[25vw] md:h-[20vw] object-cover  rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.5)]"

                    />
                </div>
                {/* text */}
                <div ref={textRef} className="space-y-4">
                    <h1 className="lol text-3xl md:text-4xl font-bold text-purple-400">
                        Masad Rayan
                    </h1>
                    <p className="lol text-lg font-medium text-gray-300">
                        MERN STACK DEVELOPER · PROBLEM SOLVER
                    </p>
                    <p className="lol text-white-50 leading-relaxed">
                        A passionate MERN Stack Developer with a focus on creating efficient,
                        scalable web applications that deliver exceptional user experiences.
                    </p>

                    <div>
                        <h2 className="lol text-xl font-semibold text-white flex items-center gap-2">
                            Development Philosophy
                        </h2>
                        <p className="lol text-white-50 leading-relaxed mt-2">
                            I strive to create solutions that seamlessly combine technical precision with design clarity. Each project is an opportunity to merge logic with creativity, building clean, modular code that scales effectively and delivers meaningful value.
                        </p>
                    </div>

                    <div>
                        <h2 className="lol text-xl font-semibold">More Information</h2>
                        <div className="flex gap-4 mt-3">
                            <a
                                href="https://www.linkedin.com/in/masad-rayan/"
                                target="_blank"
                                className="link bg-blue-500 p-3 rounded-full hover:scale-110 transition"
                            >
                                <FaLinkedin size={22} />
                            </a>
                            <a
                                href="https://github.com/MasadRayan"
                                target="_blank"
                                className="link bg-gray-800 p-3 rounded-full hover:scale-110 transition"
                            >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://www.facebook.com/masad.rayan.2024"
                                target="_blank"
                                className="link bg-blue-600 p-3 rounded-full hover:scale-110 transition"
                            >
                                <FaFacebook size={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
