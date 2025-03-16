"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import heroBg from '@/public/images/heroBg.jpg'

const HeroSection = () => {
    return (
        <motion.section
            className='relative z-10 w-dvw h-svh flex items-center justify-center  '
            initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Move up and fade in
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true }} // Animates once per session
        >
            <div className='absolute top-0 left-0 w-full h-full opacity text-[#FFCE1B] z-10 '>
                <Image 
                    src={heroBg}
                    alt='Black Hero background'
                    fill
                    priority={true}
                    quality={100}
                    style={{ objectFit: "cover" }}
                />
            </div>
            <motion.div 
                className='relative z-30 flex flex-col items-center pt-[5%] '
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.5 } }, // Stagger animation
                }}
            >
                <motion.h1
                    className=' text-[#fafafa] text-center'
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
                    }}
                >
                    Giving the<br/>Web a Voice
                </motion.h1>
                <motion.p
                    className='p1 text-[#fafafab3] font-medium text-center mt-[8%] '
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 2 } }
                    }}
                >
                    Powering 100+ businesses with cutting-edge, scalable,<br className='hidden lg:block'/>and high-performance software solutions
                </motion.p>
            </motion.div>
        </motion.section>
    )
}

export default HeroSection
