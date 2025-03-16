// 'use client'
// import React, { useEffect, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import KeenSlider from 'keen-slider';
// import 'keen-slider/keen-slider.min.css';
// import Image from 'next/image';
// import damac from '@/public/images/ourCustomers/damac.jpg';
// import trade from '@/public/images/ourCustomers/trade.webp';
// import graphic from '@/public/images/ourCustomers/graphic.jpg';
// import laptop from '@/public/images/ourCustomers/laptop.jpg';

// const OurCustomers = () => {
//     const sliderRef = useRef(null);
//     const sectionRef = useRef(null);
//     const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

//     useEffect(() => {
//         const slider = new KeenSlider(sliderRef.current, {
//             loop: true,
//             slides: { perView: 3, spacing: 15 }, // Keeps the spacing intact
//             breakpoints: {
//                 '(max-width: 1024px)': {
//                     slides: { perView: 2, spacing: 10 },
//                 },
//                 '(max-width: 768px)': {
//                     slides: { perView: 1, spacing: 5 },
//                 },
//             },
//         });
//         return () => slider.destroy();
//     }, []);

//     const slides = [
//         { 
//             id: 1, 
//             src: damac, 
//             title: 'DAMAC', 
//             description: "DAMAC is a leading luxury real estate developer in Dubai, renowned for its high-end residential, commercial, and leisure properties."
//         },
//         { 
//             id: 2, 
//             src: trade, 
//             title: 'TRADE', 
//             description: "TRADE is a premier trading platform in Dubai, providing cutting-edge solutions for investors, businesses, and financial institutions."
//         },
//         { 
//             id: 3, 
//             src: graphic, 
//             title: 'GRAPHICAL', 
//             description: "GRAPHICAL is a creative design solutions provider specializing in branding, digital marketing, and multimedia production."
//         },
//         { 
//             id: 4, 
//             src: laptop, 
//             title: 'LENOVO', 
//             description: "LENOVO is one of the top-selling laptop brands in Europe, known for its innovation, durability, and performance-driven devices."
//         },
//         { 
//             id: 5, 
//             src: damac, 
//             title: 'DAMAC', 
//             description: "DAMAC continues to shape Dubai’s skyline with its portfolio of luxurious real estate projects."
//         },
//         { 
//             id: 6, 
//             src: damac, 
//             title: 'DAMAC', 
//             description: "With over two decades of experience, DAMAC has played a pivotal role in Dubai's transformation into a global luxury hub."
//         },
//         { 
//             id: 7, 
//             src: graphic, 
//             title: 'GRAPHICAL', 
//             description: "GRAPHICAL provides end-to-end creative solutions, from concept development to final execution."
//         },
//         { 
//             id: 8, 
//             src: laptop, 
//             title: 'LENOVO', 
//             description: "LENOVO's commitment to innovation is evident in its range of smart devices, including AI-powered laptops, foldable screens."
//         },
//         { 
//             id: 9, 
//             src: damac, 
//             title: 'DAMAC', 
//             description: "DAMAC’s signature properties boast ultra-modern interiors, breathtaking architectural designs."
//         },
//         { 
//             id: 10, 
//             src: damac, 
//             title: 'DAMAC', 
//             description: "Recognized for its commitment to excellence, DAMAC has earned numerous international awards for innovation and quality in real estate."
//         }       
//     ];

//     return (
//         <motion.section
//             ref={sectionRef}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             className="w-dvw h-svh pl-[.5%] pr-[1.7%] "
//         >
//             <div className="w-full h-full rounded-tl-4xl rounded-br-4xl bg-[#1d1d1d] pl-[3%] pt-[4%] relative">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: .5, delay: 0.5 }}
//                     className="flex gap-[4%]"
//                 >
//                     <span className="p3 text-[#fafafab3] uppercase">Our Customers</span>
//                     <h2 className="text-[#fafafa]">
//                         <motion.span 
//                             initial={{ opacity: 0, y: 10 }} 
//                             animate={isInView ? { opacity: 1, y: 0 } : {}} 
//                             transition={{ duration: 1, delay: .5 }}
//                         >
//                             the wonderful people
//                         </motion.span> 
//                         <motion.span 
//                             initial={{ opacity: 0, y: 10 }} 
//                             animate={isInView ? { opacity: 1, y: 0 } : {}} 
//                             transition={{ duration: 1.5, delay: 1.5 }}
//                         >
//                             {` `}and companies
//                         </motion.span> 
//                         <br />
//                         <motion.span 
//                             initial={{ opacity: 0, y: 10 }} 
//                             animate={isInView ? { opacity: 1, y: 0 } : {}} 
//                             transition={{ duration: 1.5, delay: 2 }}
//                         >
//                             we work with
//                         </motion.span>
//                     </h2>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 1, delay: 2 }}
//                     className="w-full pl-[2%] mt-[6%] relative"
//                 >
//                     {/* Keen Slider container */}
//                     <div ref={sliderRef} className="keen-slider overflow-visible min-h-[20rem]">
//                         {slides.map((slide) => (
//                             <div 
//                                 key={slide.id}
//                                 className="group relative custom-slide keen-slider__slide w-1/3 aspect-[4/3] rounded-tl-4xl rounded-br-4xl border-[#fafafa]/10 border-[.5px]"
//                             >
//                                 <Image 
//                                     src={slide.src}
//                                     alt=""
//                                     fill
//                                     quality={100}
//                                     objectFit="cover"
//                                     className="scale-110 group-hover:scale-100 transition-all duration-500 ease-in-out"
//                                 />
//                                 {/* <span className="absolute z-20 top-6 left-6 text-2xl italic font-semibold text-[#fafafa] pr-6">
//                                     {slide.title}
//                                 </span> */}
//                                 <span className="absolute z-20 bottom-[6%] left-[5%] p4 text-[#fafafa] pr-6">
//                                     {slide.description}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#1d1d1d] to-transparent pointer-events-none"></div>
//                 </motion.div>
//             </div>
//         </motion.section>
//     );
// };

// export default OurCustomers;
'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import scizers from '@/public/images/experience/scizersWeb.png';
import open from '@/public/images/experience/open.svg';
import Link from 'next/link';



const Experience = () => {
    const sliderRef = useRef(null);
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
                    className="image-375 relative w-full h-[60vh] mt-[8%] lg:mt-0 gap-y-[10%] lg:gap-y-0 flex flex-col lg:flex-row items-center justify-center lg:gap-x-[6%] "
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
                    transition={{ duration: .5, delay: 1.8 }}
                    className='relative group w-[95%] lg:w-2/5 h-full rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm '>
                        <Image 
                            src={scizers}
                            alt={`Scizers`}
                            fill
                            quality={100} 
                            className=" transition-all duration-500 ease-in-out object-cover object-left rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm  "
                        />
                        <div className='absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 '>
                            <Link href={`https://scizers.com/`} target='_blank' >
                                <Image 
                                src={open}
                                alt='Open Button'
                                fill
                                quality={100}
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;




{/* Keen Slider container */}
{/* <div ref={sliderRef} className="keen-slider overflow-visible min-h-[53vh]">
{slides.map((slide) => (
    <div
        key={slide.id}
        className="group custom-slide keen-slider__slide w-[25%] sm:w-[50%] md:w-[33.333%] aspect-[4/3] rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm border-[#fafafa]/10 border-[.5px] relative"
    >
        <Image 
            src={slide.src}
            alt={slide.title}
            width={320} 
            height={240}
            quality={100} 
            className="w-full h-full object-cover rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm transition-all duration-500 ease-in-out scale-110 group-hover:scale-105"
        />
        <span className="absolute z-20 bottom-[6%] left-[6%] p4 text-[#fafafa] w-[90%] ">
            {slide.description}
        </span>
    </div>
))}
</div> */}