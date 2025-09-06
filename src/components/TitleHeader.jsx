import { sub } from 'framer-motion/client';
import React from 'react';

const TitleHeader = ({ title, sub }) => {
    return (
        <div className='flex flex-col  items-center text-center gap-5'>
            <div className='hero-badge'>
                <p>{sub}</p>
            </div>
            <div className='font-semibold text-3xl md:text-4xl lg:text-5xl text-center'>
                {title}
            </div>
        </div>
    );
};

export default TitleHeader;