'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import bg from '@/public/images/blackB.jpg'
import FormComp from './FormComp'

const ContactUs = () => {
    const [load, setLoad] = useState(false);

    return (
        <section className='contactUs-gradient flex flex-col'>
            <motion.div 
                className='relative w-dvw lg:h-svh px-[3%]'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className='contact-bg bg-black lg:bg-transparent absolute top-0 left-[2%] lg:left-[1%] w-[96%] lg:w-[97%] h-full rounded-tl-4xl rounded-br-4xl '>
                    <Image 
                        src={bg} 
                        alt='Black Background' 
                        fill 
                        quality={100}
                        className='hidden lg:block w-full h-full object-cover rounded-tl-4xl rounded-br-4xl'
                    />
                </div>

                <div className='relative z-10 w-full pt-[7%] pb-[10%] lg:pb-0 flex flex-col lg:flex-row gap-x-[8%]'>
                    <motion.div 
                        className='w-full lg:w-1/2 flex justify-between pl-[4%] lg:pl-0 '
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className='w-full flex flex-col lg:flex-row gap-[5%]'>
                            <span className='p3 text-[#fafafab3] uppercase mb-[4%] lg:mb-0 '>CONTACT ME</span>
                            <h2 className='text-[#fafafa]'>
                                let’s make the web<br/>talk about your<br/>business
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='relative w-full lg:w-2/5 flex flex-col mt-[8%] lg:mt-0 px-[4%] lg:px-0 '
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='p1 lg:p5 font-semibold text-white'>Get in touch</h3>
                        <span className='mt-[2%] mb-[1%] p3 lg:text-[0.693vw] lg:leading-[0.991vw] tracking-wider text-[#fafafab3] uppercase'>
                            I will respond to you within 1 business day
                        </span>
                        <FormComp 
                            formName={"bottomForm"}
                            setLoad={setLoad}
                        />
                        <label
                            htmlFor="bottomForm-submit"
                            tabIndex="0"
                            className={`py-[3%] lg:py-[2.5%] mt-[4%] lg:mt-[2%] border border-[#ffd401] rounded-md text-[3.721vw] lg:text-[1.062vw]  w-[25%] text-center font-bold transition-all duration-300 ease-out hover:bg-[#ffd401]/15 text-white ${
                                load ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                            }`}
                            >
                            {load ? (
                                <div className='w-full h-full flex items-center justify-center '>
                                    <div className='loader'></div>
                                </div>
                            ) : 'Send'}
                        </label>
                    </motion.div>
                </div>
            </motion.div>

            {/* Infinite Scrolling Text with Framer Motion */}
            <div className='w-full h-[12vh] lg:h-[32vh] flex items-center overflow-hidden whitespace-nowrap relative'>
                <motion.div 
                    className='flex absolute'
                    animate={{ x: ['0%', '-100%'] }} 
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    style={{ width: '200%' }} 
                >
                    <h1 className='text-white px-[10%]'>
                        Multilingual & Global Web Solutions – Speak to Your Audience in Any Language!
                    </h1>
                    <h1 className='text-white px-[10%]'>
                        Multilingual & Global Web Solutions – Speak to Your Audience in Any Language!
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactUs






{/* <div className='w-full'>
    <FormComp 
    formName={"bottomForm"} 
    setLoad={setLoad} 
    />
    <label
        className={`block bg cursor-pointer p3 border-[#ffd401] border font-bold bg-transparent text-[#fafafa] px-4 py-3 text-center rounded-md mt-[4%] min-w-[4.273vw] max-w-[5.473vw] hover:bg-[#ffd401]/15 transition-all duration-200 ease-in-out  ${
            load && "opacity-50 "
        }`}
        htmlFor="bottomForm-submit"
        >
        {load ? 'Sending.. ' : 'Send'}
    </label>
</div> */}