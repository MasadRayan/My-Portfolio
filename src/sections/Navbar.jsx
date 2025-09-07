import { header } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} z-[999]`}>
            <div className='inner'>
                <a className='logo' href="#hero">
                    Masad Rayan
                </a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="/resume.pdf" // path relative to public folder
                    download="Masad_Rayan_Resume.pdf" // file name after download
                    className="contact-btn group"
                >
                    <div className="inner">
                        <span>Download CV</span>
                    </div>
                </a>

            </div>
        </header>
    );
};

export default Navbar;