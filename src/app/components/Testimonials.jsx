'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import KeenSlider from 'keen-slider'
import { motion } from 'framer-motion'
import 'keen-slider/keen-slider.min.css'
import bg from '@/public/images/blackLinedBg.png'
import whiteArrow from '@/public/white-arrow.svg';
import man1 from '@/public/images/testimonials/man1.jpg'
import man2 from '@/public/images/testimonials/man2.jpg'
import man3 from '@/public/images/testimonials/man3.jpg'
import woman1 from '@/public/images/testimonials/woman1.jpg'
import woman2 from '@/public/images/testimonials/woman2.jpg'
import legend from '@/public/images/testimonials/legendA.png'
import aquaArc from '@/public/images/testimonials/aquaArc.png'
import spaceMortage from '@/public/images/testimonials/spaceMortage.png'
import palm from '@/public/images/testimonials/palm.png'
import coffique from '@/public/images/testimonials/coffique.png'

const testimonials = [
    { id: 1, owner: man1, website: legend, backgroundColor: '#d60000', comments: ["Great!", "Works on all devices", "Opens in 3 seconds", "Super efficient!"] },
    { id: 2, owner: man2, website: aquaArc, backgroundColor: '#86A1D1', comments: ["Amazing support!", "Smooth experience", "Highly recommended", "Would buy again!"] },
    { id: 3, owner: man3, website: spaceMortage, backgroundColor: '#005eff', comments: ["Top-notch!", "Responsive and fast", "Would use again", "Impressive design!"] },
    { id: 4, owner: woman1, website: palm, backgroundColor: '#1E6B6F', comments: ["Love it!", "Easy to navigate", "Perfect for my needs", "Exactly what I wanted!"] },
    { id: 5, owner: woman2, website: coffique, backgroundColor: '#bfbfbf', comments: ["User-friendly!", "Minimalist design", "Loads quickly", "Great experience overall!"] },
]   

const Testimonials = () => {
    const sliderRef = useRef(null)
    const sliderInstance = useRef(null)
    const [sliderLoaded, setSliderLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            sliderInstance.current = new KeenSlider(sliderRef.current, {
                loop: true,
                slides: { perView: 1, spacing: 0 },
                created: () => {
                    setTimeout(() => setSliderLoaded(true), 100); 
                },
                slideChanged: (slider) => {
                    setCurrentSlide(slider.track.details.rel); // Track active slide index
                },
            });
        }
        return () => {
            if (sliderInstance.current) {
                sliderInstance.current.destroy();
            }
        };
    }, []);
    
    
    const slidePrev = () => {
        if (sliderInstance.current) {
            console.log("Moving to previous slide");
            sliderInstance.current.prev();
        }
    }
    
    const slideNext = () => {
        if (sliderInstance.current) {
            console.log("Moving to next slide");
            sliderInstance.current.next();
        }
    }

    return (
        <motion.section 
            initial={{ opacity: 0, y: 100 }} // Start hidden and moved down
            whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className='testimonials relative w-dvw h-svh lg:pt-[5%] flex '
        >
            <div className='absolute top-0 left-0 w-full h-full'>
                <Image src={bg} alt='' fill quality={100} />
            </div>

            <div className='relative w-full px-[3%] flex flex-col lg:flex-row justify-between '>
                {/* Title Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='w-full lg:w-3/5 pl-[2%] lg:pl-0 '
                >
                    <div className='flex flex-col lg:flex-row gap-[4%] '>
                        <span className='p3 text-[#fafafab3] uppercase mb-[5%] lg:mb-0'>Testimonials</span>
                        <h4 className=' text-[#fafafa] '>
                            what my customers are<br className='hidden lg:block'/> saying... for real
                        </h4>
                    </div>
                </motion.div>

                {/* Slider with Navigation Buttons */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='relative w-full lg:w-2/5 mt-[2%] testimonials-375   '
                >
                    {sliderLoaded && (
                        <button 
                        onClick={slidePrev} 
                        className='absolute left-[40%] -translate-x-1/2 lg:translate-x-0 lg:left-0 bottom-[15%] lg:bottom-[10%] w-[12%] lg:w-[8%] h-[7%] lg:h-[8%] flex items-center justify-center rounded-md z-10 transition-all duration-200 ease-in-out border border-[#ffd401] hover:bg-[#ffd401]/15 cursor-pointer '
                        >
                            <Image 
                                src={whiteArrow}
                                alt='White Arrow'
                                width={14}
                                height={14}
                                className='rotate-y-180 w-[4vw] lg:w-[0.92vw] lg:h-[2vh] '
                            />
                        </button>
                    )}

                    <div ref={sliderRef} className='keen-slider w-full h-[70%] lg:h-3/4  '>
                        {testimonials.map((item, index) => (
                            <motion.div 
                                key={item.id} 
                                className='relative flex keen-slider__slide w-full h-full rounded-tl-4xl rounded-br-4xl '
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }} // Change whileInView to animate
                                transition={{ duration: 1, delay: index * 0.3 }}
                                style={{ backgroundColor: item.backgroundColor }}
                            >                        
                                <div className='w-1/2 h-full pl-[3%] pt-[3%] flex flex-col items-start justify-between '>
                                    <Image 
                                    src={item.owner} 
                                    alt='Testimonial'
                                    width={1.22 * 120} 
                                    height={120} 
                                    style={{ objectFit: "cover", maxWidth: "120px", maxHeight: "120px" }} 
                                    quality={100} 
                                    className='rounded-full object-cover lg:w-[10vw] lg:h-[22vh]  '
                                    />
                                    <div className='relative w-full h-[50vh] pb-[6%] flex flex-col items-start justify-end gap-y-[4%] overflow-hidden '>
                                        {item.comments.map((comment, i) => (
                                            <motion.div 
                                                key={i} 
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Show when active
                                                transition={{ duration: 0.5, delay: i * 0.3 }}
                                                className='text-[2.991vw] px-[7%] py-[4%] lg:text-[1.384vw] lg:leading-[2.05vw] lg:px-[5%] lg:py-[2%] bg-[#1d1d1d] rounded-full text-white'
                                            >
                                                {comment}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className='relative w-1/2 h-4/5 mt-[16%] rounded-br-4xl '>
                                    <Image 
                                    src={item.website} 
                                    alt='Testimonial'
                                    fill 
                                    style={{ objectFit: "cover" }}
                                    quality={100} 
                                    className='object-cover object-left-top rounded-br-4xl'
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {sliderLoaded && (
                        <button 
                            onClick={slideNext} 
                            className='absolute left-[60%] -translate-x-1/2 lg:translate-x-0 lg:left-[12%] bottom-[15%] lg:bottom-[10%] w-[12%] lg:w-[8%] h-[7%] lg:h-[8%] flex items-center justify-center rounded-md z-10 transition-all duration-200 ease-in-out border border-[#ffd401] hover:bg-[#ffd401]/15 cursor-pointer '
                        >
                            <Image 
                                src={whiteArrow}
                                alt='White Arrow'
                                width={14}
                                height={14}
                                className='w-[4vw] lg:w-[0.92vw] lg:h-[2vh] '
                            />
                        </button>
                    )}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Testimonials