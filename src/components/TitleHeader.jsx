import { sub } from 'framer-motion/client';
import React from 'react';

const TitleHeader = ({ title, sub }) => {
    return (
        <div className='flex flex-col  items-center text-center gap-5'>
            <div className='hero-badge text-blue-200'>
                <p>{sub}</p>
            </div>
            <div className='font-semibold text-3xl md:text-4xl lg:text-5xl text-center bg-gradient-to-r from-[#0192b0] via-[#5073f6] to-[#8b6efa] bg-clip-text text-transparent'>
                {title}
            </div>
        </div>
    );
};

export default TitleHeader;