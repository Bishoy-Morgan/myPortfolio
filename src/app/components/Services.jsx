'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import bg from '@/public/images/blackLinedBg.png'

const Services = () => {
    const services = [
        {
            id: 1,
            animation: "/videos/web1.mp4",
            title: 'Website development',
            description: "I build fast, scalable, and responsive websites. Whether it's a landing page, business website, or web application, I ensure top-notch performance and a seamless user experience.",
        },
        {
            id: 2,
            animation: "/videos/design.mp4",
            title: 'Web design',
            description: 'I can design your website from scratch, I create modern, simple, user-friendly designs that match your brand and goals.',
        },
        {
            id: 3,
            animation: "/videos/lang.mp4",
            title: 'Multilingual Website Developmen',
            description: 'Build websites that support multiple languages based on your target market place, and your business plan',
        },
    ]

    return (
        <motion.section
            id='services-section'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='relative w-dvw h-[85vh] pt-[10%] lg:pt-[6%] flex overflow-hidden custom-1024-height '
        >
            <div className='absolute top-0 left-0 w-full h-full'>
                <Image 
                    src={bg}
                    alt='black background'
                    fill
                    quality={100}
                />
            </div>

            <div className='relative w-full px-[3%] flex flex-col lg:flex-row justify-start gap-[5%] '>
                {/* Title Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='w-full lg:w-[60%] flex flex-col lg:flex-row justify-start gap-x-[6%] pl-[2%] lg:pl-0 '
                >
                    <span className='p3 text-[#fafafab3] uppercase mb-[2%] lg:mb-0 '>Services</span>
                    <h2 className='hidden lg:block leading-[10.233vw] lg:!leading-[4.231vw] text-[#fafafa] lg:max-h-[30vh]'>
                        {/* from concept to code — <br/>websites that deliver */}
                        streamline your project to<br/>
                        enter the market and scale<br/>
                        successfully
                    </h2>
                    <h2 className='lg:hidden leading-[10.233vw] lg:!leading-[4.231vw] text-[#fafafa] lg:max-h-[30vh]'>
                        {/* from concept to code — <br/>websites that deliver */}
                        streamline your project to enter the market and scale successfully
                    </h2>
                </motion.div>

                {/* Service Cards Animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.3, delayChildren: 0.5 }}
                    viewport={{ once: true }}
                    className='w-full lg:w-1/3 h-full flex flex-col gap-y-[4%] lg:gap-y-[6%] '
                >
                    {services.map((item) => (
                        <motion.div 
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8 }}
                            className='w-full h-[15vh] lg:h-[23.613vh] flex items-center justify-center gap-x-[5%] bg-[#1d1d1d] rounded-tl-4xl rounded-br-4xl border-[#fafafa]/5 border-[.5px]'
                        >
                            <div className='w-1/5 lg:w-1/4 h-[8vh] lg:max-w-[4.746vw] lg:h-[10.682vh] flex items-center justify-center rounded-2xl border-2 border-paleWhite '>
                                <video autoPlay loop muted playsInline className="w-[10.691vw] lg:w-[3.691vw] lg:h-[8.308vh] ">
                                    <source src={item.animation} type="video/mp4" />
                                </video>
                            </div>
                            <div className='w-[70%] lg:w-3/5 flex flex-col items-start justify-center'>
                                <h3 className='p1 font-medium mb-[4%] text-white'>
                                    {item.title}
                                </h3>
                                <span className='block p2 text-[#fafafab3]'>
                                    {item.description}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Services



{/* Black squares at background  */}
            {/* <div className='absolute bottom-20 -left-32 w-52 h-52 rounded-[3rem] bg-transparent border-2 border-[#1d1d1d] -z-10'></div>
            <div className='absolute top-[3.5rem] -left-32 w-52 h-52 rounded-tr-[3rem] bg-transparent border-t-2 border-r-2 border-[#1d1d1d] -z-10'></div>
            <div className='absolute top-24 left-[4.9rem] w-[12rem] h-52 rounded-bl-[3rem] bg-transparent border-b-2 border-l-2 border-[#1d1d1d] -z-10'></div>
            <div className='absolute bottom-[10.09rem] left-[8.5rem] w-44 h-36 rounded-tr-[3rem] bg-transparent border-t-2 border-r-2 border-[#1d1d1d] -z-10'></div>
            <div className='absolute bottom-[7.8rem] left-[19.4rem] w-10 h-10 rounded-bl-[3rem] bg-transparent border-b-2 border-l-2 border-[#1d1d1d] -z-10'></div>
            <div className='absolute -bottom-[5.09rem] left-[21.7rem] w-[30rem] h-52 rounded-tr-[3rem] bg-transparent border-t-2 border-r-2 border-[#1d1d1d]  -z-10'></div>
            <div className='absolute -top-10 -right-10 w-66 h-66 rounded-[3rem] bg-transparent border-2 border-[#1d1d1d] -z-10'></div> */}
