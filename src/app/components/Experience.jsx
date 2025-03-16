'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import scizers from '@/public/images/experience/scizersWeb.png';
import open from '@/public/images/experience/open.svg';
import Link from 'next/link';


const Experience = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });


    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="experience-375 w-dvw h-[85vh] lg:h-svh pl-[2%] lg:pl-[.5%] pr-[1.7%] max-375 "
        >
            <div className="w-full h-full flex flex-col lg:gap-y-[15%] rounded-tl-4xl rounded-br-4xl bg-[#1d1d1d] pl-[3%] pt-[6%] lg:pt-[4%] relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: .5, delay: 0.5 }}
                    className="flex flex-col lg:flex-row gap-[2%] ml-[3%] lg:ml-0"
                >
                    <span className="p3 mb-[2%] lg:mb-0 text-[#fafafab3] uppercase">Experience</span>
                    <h2 className="text-[#fafafa] ">
                        <motion.span 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={isInView ? { opacity: 1, y: 0 } : {}} 
                            transition={{ duration: .8, delay: .5 }}
                            className='inline-block'
                        >
                            the wonderful companies&nbsp;
                        </motion.span> 
                        <motion.span 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={isInView ? { opacity: 1, y: 0 } : {}} 
                            transition={{ duration: .8, delay: 1 }}
                            className='lg:inline-block'
                        >
                            {` `}people 
                        </motion.span> 
                        <br className='hidden lg:block'/>
                        <motion.span 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={isInView ? { opacity: 1, y: 0 } : {}} 
                            transition={{ duration: .8, delay: 1 }}
                            className='lg:inline-block'
                        >
                            {` `}I work with
                        </motion.span>
                    </h2>
                </motion.div>
                <div
                    className="image-375 relative w-full h-[60vh] lg:h-[50vh] mt-[8%] lg:mt-0 gap-y-[10%] lg:gap-y-0 flex flex-col lg:flex-row items-center justify-center lg:gap-x-[6%] "
                >
                    <motion.div 
                    initial={{ opacity: 0, y: 80 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: .5, delay: 1.25 }}
                    className='relative w-[95%] lg:w-2/5 h-full flex flex-col items-start justify-center gap-y-[10%] text-white '>
                        <div className='flex flex-col '>
                            <span className='p1'>Junior Web Developer</span>
                            <span className='flex items-center gap-x-[2%]'>
                                <div className='w-[5%] h-[.1vh] lg:h-[.2vh] bg-[#fafafa]'></div>
                                <span className='p2 lg:text-[1.062vw] lg:leading-[1.463vw] inline-block my-[1%] '>Scizers Technologies LLP | 2025 - Present</span>
                            </span>
                            <p className='p2 pl-[7%] '>
                                During my internship, I contributed to developing scalable web applications using React.js and Node.js, ensuring seamless UI interactions. I collaborated with senior developers to enhance performance and improve user experience for IoT-based platforms.
                            </p>
                        </div>
                        <div className='flex flex-col '>
                            <span className='p1'>Frontend Development Intern</span>
                            <span className='flex items-center gap-x-[2%]'>
                                <div className='w-[5%] h-[.1vh] lg:h-[.2vh] bg-[#fafafa]'></div>
                                <span className='p2 lg:text-[1.062vw] lg:leading-[1.463vw] inline-block my-[1%] '>SCIZERS IoT Pvt. Ltd. | July 2024 - December 2024</span>
                            </span>
                            <p className='p2 pl-[7%] '>
                                I specialize in building high-performance, multilingual websites for leading UAE businesses. I focus on optimizing speed, ensuring accessibility, and delivering pixel-perfect UI experiences that align with business goals.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 80 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="relative group w-[95%] lg:w-2/5 h-full rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm"
                    >
                        <div className="relative w-full h-full">
                            <Image 
                                src={scizers}
                                alt="Scizers"
                                fill
                                priority
                                quality={100} 
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="transition-all duration-500 ease-in-out object-cover object-left rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm"
                            />
                        </div>

                        {/* Overlay with Button */}
                        <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                            <div className="relative w-1/2 h-1/2 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm"> 
                                <Link href="https://scizers.com/" target="_blank" className='relative w-full h-full flex items-center justify-center'>
                                    <Image 
                                        src={open}
                                        alt="Open Button"
                                        fill
                                        sizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw, 10vw"
                                        quality={100}
                                    />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
