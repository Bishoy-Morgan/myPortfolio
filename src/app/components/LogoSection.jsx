'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import react from '@/public/images/logoSection/react.svg';
import node from '@/public/images/logoSection/nodejs.svg';
import html from '@/public/images/logoSection/html.svg';
import css from '@/public/images/logoSection/css.svg';
import js from '@/public/images/logoSection/javascript.svg';
import ts from '@/public/images/logoSection/typescript.svg';
import tailwind from '@/public/images/logoSection/tailwind.svg';
import python from '@/public/images/logoSection/python.svg';
import git from '@/public/images/logoSection/git.svg';
import next from '@/public/images/logoSection/nextjs.svg';

const logos = [
    { src: html, alt: 'HTML', size: 'normal' },
    { src: css, alt: 'CSS', size: 'normal' },
    { src: js, alt: 'JavaScript', size: 'normal' },
    { src: ts, alt: 'TypeScript', size: 'normal' },
    { src: python, alt: 'Python', size: 'normal' },
    { src: tailwind, alt: 'TailwindCSS', size: 'large' },
    { src: git, alt: 'Git', size: 'large' },
    { src: react, alt: 'ReactJS', size: 'large' },
    { src: next, alt: 'NextJS', size: 'normal' },
    { src: node, alt: 'NodeJS', size: 'large' },
];

const Logos = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="relative w-dvw h-full lg:h-[80vh] pb-[10%] lg:pb-0 flex flex-col items-center justify-center ">
            {/* Gradient Background */}
            <div className="gradient-bg absolute -top-[5%] left-0 w-full h-1/2 z-10"></div>

            {/* Black squares at background */}
            <div className="absolute -bottom-20 -right-10 w-80 h-52 rounded-4xl bg-transparent border-2 border-[#1d1d1d] -z-10"></div>
            <div className="absolute -bottom-20 right-2/5 w-[30rem] h-52 rounded-4xl bg-transparent border-2 border-[#1d1d1d] -z-10"></div>

            {/* Logo Area */}
            <div className="relative w-full grid grid-cols-2 lg:grid-cols-5 gap-y-20 px-[2%] z-20 place-items-center">
                {logos.map((logo, index) => (
                    <motion.div
                    key={index}
                    className="!relative flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* Desktop Image */}
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            quality={100}
                            unoptimized
                            className="hidden lg:block grayscale transition-all duration-200 hover:grayscale-0"
                            sizes="(max-width: 1024px) 12vw, 9.375vw"
                            style={{
                                width: logo.size === "large" ? "clamp(8vw, 12vw, 13vw)" : "clamp(6.25vw, 7.813vw, 9.375vw)",
                                height: "auto",
                            }}
                        />

                        {/* Mobile Image */}
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            quality={100}
                            unoptimized
                            priority
                            className="lg:hidden"
                            sizes="(max-width: 1024px) 35vw, 22vw"
                            style={{
                                width: logo.size === "large" ? "clamp(30vw, 32vw, 35vw)" : "clamp(15vw, 20vw, 22vw)",
                                height: "auto",
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Logos;
