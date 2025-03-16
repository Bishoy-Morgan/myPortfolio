'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import bg from '@/public/images/blackLinedBg.png'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import coffique from '@/public/images/portfolio/coffique.png'
import legend from '@/public/images/portfolio/legend.png'
import spaceMortgage from '@/public/images/portfolio/spaceMortgage.png'
import palmJebelAli from '@/public/images/portfolio/palmJebelAli.png'
import aquaArc from '@/public/images/portfolio/aquaArc.png'
import share from '@/public/images/portfolio/share.svg'
import Link from 'next/link'

const Portfolio = () => {
    const slides = [
        { 
            id: 2,
            imageSrc: coffique,
            title: 'COFFIQUE is an e-commerce website especialize in all about coffee.', 
            techniques: ["HTML5", "TailwindCSS", "Javascript", "ReactJS", "NextJS", "NodeJS"],
            gradient: "gray-gradient",
            href: '#'
        },
        { 
            id: 3,
            imageSrc: legend,
            title: 'LEGEND is an interior and exterior design company, Especialized in alluminum profiles.', 
            techniques: ["HTML5", "TailwindCSS", "Javascript", "ReactJS", "NextJS", "NodeJS"],
            gradient: "red-gradient",
            href: 'https://legend-design.vercel.app/'
        },
        { 
            id: 4,
            imageSrc: spaceMortgage,
            title: 'Space Mortgage is a website offering mortgage services for UAE resident and international resident in UAE.', 
            techniques: ["HTML5", "Tailwindcss", "SASS", "Javascript", "Typescript", "ReactJS"],
            gradient: "blue-gradient",
            href: 'https://spacemortgage.ae'
        },
        { 
            id: 5,
            imageSrc: palmJebelAli,
            title: 'Palm Jebel Ali is real estate landing page offers services of villas and townhouses in Ras El-Khaimah.',
            techniques: ["HTML5", "Tailwindcss", "Javascript", "ReactJS"],
            gradient: "green-gradient",
            href: 'https://www.uaeluxuryresidences.com/promotions-palm-jebel-ali'
        },
        { 
            id: 6,
            imageSrc: aquaArc,
            title: 'Aqua Arc is real estate landing page offers luxury villas and townhouses at Al Marjan Island in UAE.', 
            techniques: ["HTML5", "Tailwindcss", "Javascript", "ReactJS"],
            gradient: "lightBlue-gradient",
            href: 'https://www.aquaarc-bnw.com'
        },
    ]
    

    const sliderRef = useRef(null)
    const sliderInstance = useRef(null)
    const sliderContainer = useRef(null)
    const isInView = useInView(sliderContainer, { once: true, margin: "-50px" })

    useEffect(() => {
        if (sliderRef.current && !sliderInstance.current) {
            sliderInstance.current = new KeenSlider(sliderRef.current, {
                loop: true,
                slides: { perView: 3, spacing: 30 },
                breakpoints: {
                    '(max-width: 1920px)': { slides: { perView: 3, spacing: 50 } },
                    '(max-width: 1280px)': { slides: { perView: 3, spacing: 40 } },
                    '(max-width: 1024px)': { slides: { perView: 2, spacing: 30 } },
                    '(max-width: 768px)': { slides:  { perView: 1, spacing: 10 } },
                },
            })
        }

        const slider = sliderInstance.current
        const interval = setInterval(() => {
            slider?.next()
        }, 10000)

        return () => {
            clearInterval(interval)
            sliderInstance.current?.destroy()
            sliderInstance.current = null
        }
    }, []) 


    return (
        <section id='portfolio-section' className='relative w-dvw pt-[12%] lg:py-[12%] '>
            <div className='absolute top-0 left-0 w-full h-full'>
                <Image src={bg} alt='Black Background' fill quality={100} className='rotate-x-180' />
            </div>

            <div className='relative w-full px-[3%] pb-[8%] lg:pb-0 '>
                {/* Title Animation - Moves Up from Bottom */}
                <div className='relative w-full '>
                    <span className='block mb-[4%] lg:mb-0 lg:absolute top-0 left-0 p3 text-[#fafafab3] uppercase'>
                        portfolio
                    </span>
                    <h3 className='portfolio-font text-center text-[#fafafa] flex flex-col items-center'>
                        <motion.div 
                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <span className='lg:block'>from sketches to</span>
                            <motion.span 
                                initial={{ color: "#fafafa" }} // Start as white
                                animate={{ color: "#ffd401" }} // Change to yellow
                                transition={{ delay: 3, duration: 1, ease: "easeInOut" }} // Delay 3s before changing
                                className="inline-block lg:hidden "
                            >
                                &nbsp;stunning
                            </motion.span>{' '}
                            <span className='block lg:hidden '> website</span>
                        </motion.div>

                        <motion.div 
                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className='hidden lg:block'
                        >
                            <motion.span 
                                initial={{ color: "#fafafa" }} // Start as white
                                animate={{ color: "#ffd401" }} // Change to yellow
                                transition={{ delay: 3, duration: 1, ease: "easeInOut" }} // Delay 3s before changing
                                className="inline-block lg:h-[21vh] "
                            >
                                stunning
                            </motion.span>{' '}
                            website
                        </motion.div>
                    </h3>
                </div>

                {/* Slider Animation - Smooth Entry & Sliding */}
                <motion.div 
                    ref={sliderContainer}
                    className='relative w-full h-[65vh] lg:h-[83.635vh] mt-[20%] lg:mt-[5%]  '
                >
                    <motion.div 
                        ref={sliderRef}
                        className='relative keen-slider w-full h-full   '
                    >
                        {slides.map((slide, index) => (
                            <div 
                                key={slide.id} 
                                className='group portfolio-overlay keen-slider__slide !w-[25.708vw] lg:h-[51.928vh] lg:space-x-[5%] flex flex-col items-start'
                            >
                                <motion.div
                                    className=' relative w-full h-full'
                                    initial={{ opacity: 0, y: 300 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: .7, delay: index * 0.2, ease: "easeInOut" }}
                                >
                                    <div className={`${slide.gradient} relative w-full h-3/4 min-h-[36vh] max-h-[42vh] lg:min-h-[52vh] lg:max-h-[58vh] rounded-tl-4xl rounded-br-4xl`}>
                                        <Image 
                                            src={slide.imageSrc}
                                            alt="Project Image"
                                            fill
                                            quality={100}
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            style={{ objectFit: "cover" }}
                                            className='rounded-tl-4xl rounded-br-4xl projectImage z-20 scale-100 transition-all duration-300 ease-in-out group-hover:scale-105'
                                        />
                                    </div>
                                    <div className='w-full h-1/4 pt-[4%]  '>
                                        <div className='w-full flex justify-between items-start '>
                                            <p className='p5 font-medium text-[#fafafa] w-[95%] '>
                                                {slide.title}
                                            </p>
                                            <Link href={slide.href} target='_blank'>
                                                <Image 
                                                src={share}
                                                alt='Share'
                                                width={30}
                                                height={30}
                                                className='w-[8vw] lg:w-[2vw] lg:h-[4vh] '
                                                />
                                            </Link>
                                        </div>
                                        <div className='flex flex-wrap gap-y-[1vh] gap-x-[2%] mt-[3%]  '>
                                            {slide.techniques.map((item, index) => (
                                                <span 
                                                    key={index} 
                                                    className='p2 block font-semibold uppercase border border-[#1d1d1d] text-paleWhite px-[2%] py-[1%] rounded-full'
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Portfolio
