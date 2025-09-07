import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { expCards } from '../constants';
import GlowCard from '../components/GlowCard';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {

  useGSAP(() => {

    gsap.utils.toArray('.timeline-card').forEach((card, index) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 60%',
          toggleActions: 'play reverse play reverse', 
        }
      })
    })

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        scrub: true,
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });


    gsap.utils.toArray('.expText').forEach((text, index) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
          toggleActions: 'play reverse play reverse',
        }
      })
    })

  }, [])


  return (
    <section id='education' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title='Education Journey' sub='My academic background and experiences' />

        <div className='relative mt-32'>
          <div className='relative z-50 xl:space-y-32 space-y-20'>
            {expCards.map((card, index) => (
              <div key={index} className='exp-card-wrapper'>
                <div className='lg:w-2/6'>
                  <GlowCard card={card} index={index}>

                  </GlowCard>
                </div>
                <div className='lg:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper '>
                      <div className='timeline' />
                      <div className='gradient-line w-1 h-full ' />
                    </div>
                    <div className='expText flex lg:gap-20 md:gap-10 gap-5 relative z-20'>
                      <div className='timeline-logo'>
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div >
                        <h1 className='font-semibold text-3xl'>
                          {card.title}
                        </h1>
                        <p className='my-5 text-white'>{card.date}</p>
                        <p className='text-[#839cb5] italic'>
                          Key Learnings
                        </p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                          {card.responsibilities.map((item, idx) => (
                            <li className='text-lg' key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;