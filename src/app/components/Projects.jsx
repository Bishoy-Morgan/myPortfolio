// "use client";

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import Image from "next/image";
// import arrowLeft from "../../../public/arrow-left.svg"
// import arrowRight from "../../../public/arrow-right.svg"
// import whiteArrow from "../../../public/white-arrow.svg"
// import projectA from "../../../public/images/projectA.jpg"
// import projectB from "../../../public/images/projectB.jpg"
// import projectC from "../../../public/images/projectC.jpg"
// import projectD from "../../../public/images/projectD.jpg"
// import projectE from "../../../public/images/projectE.jpg"

// export default function Projects() {
//     const [sliderRef, instanceRef] = useKeenSlider({
//         loop: true,
//         slides: {
//         perView: 1,
//         spacing: 0,
//         },
//         breakpoints: {
//         "(max-width: 768px)": {
//             slides: { perView: 1 },
//         },
//         },
//     });

//     return (
//         <div className="relative w-full h-svh py-16 flex flex-col items-center  max-w-[1920px] mx-auto">
//             <span className="text-3xl uppercase font-extralight text-white mb-12  ">Projects</span>
//             {/* Slider Wrapper */}
//             <div ref={sliderRef} className="keen-slider h-[500px] max-w-6xl mx-auto ">
//                 {/* Slide 1 */}
//                 <div className="keen-slider__slide flex justify-center items-center gap-1 ">
//                     <div className="relative w-3/5 h-full ">
//                         <Image 
//                         src={projectA}
//                         alt="A"
//                         fill
//                         />
//                     </div>
//                     <div className="w-2/5 h-full flex flex-col gap-1">
//                         <div className="relative w-full h-3/5 bg-black">
//                             <Image 
//                             src={projectB}
//                             alt="B"
//                             fill
//                             />
//                         </div>
//                         <div className="relative w-full h-2/5 flex gap-1">
//                             <div className="w-2/5 flex flex-col gap-1">
//                                 <button className="w-full h-1/4 min-h-16 border border-white flex items-center justify-center gap-3 text-white transition-all duration-300 ease-in-out relative group hover:bg-white hover:text-black">
//                                 <span className="transition-all duration-500 group-hover:translate-x-1.5 ease-in-out">Take a look</span>
//                                 <Image 
//                                 src={whiteArrow}
//                                 alt="Left Arrow"
//                                 width={16}
//                                 height={16}
//                                 quality={100}
//                                 className="transition-all duration-300 ease-in-out transform translate-x-0 opacity-100 group-hover:translate-x-3 group-hover:opacity-0"
//                                 />
//                                 </button>
//                                 <div className="w-full h-3/4 bg-white">

//                                 </div>
//                             </div>
//                             <div className="w-3/5 h-full bg-red-500">

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Slide 2 */}
//                 <div className="keen-slider__slide flex justify-center items-center gap-1 ">
//                     <div className="relative w-3/5 h-full ">
//                         <Image 
//                         src={projectE}
//                         alt="A"
//                         fill
//                         />
//                     </div>
//                     <div className="w-2/5 h-full flex flex-col gap-1">
//                         <div className="relative w-full h-3/5 bg-black">
//                             <Image 
//                             src={projectA}
//                             alt="B"
//                             fill
//                             />
//                         </div>
//                         <div className="relative w-full h-2/5 flex gap-1">
//                             <div className="w-2/5 flex flex-col gap-1">
//                                 <button className="w-full h-1/4 min-h-16 border border-white flex items-center justify-center gap-3 text-white transition-all duration-300 ease-in-out relative group hover:bg-white hover:text-black">
//                                 <span className="transition-all duration-500 group-hover:translate-x-1.5 ease-in-out">Take a look</span>
//                                 <Image 
//                                 src={whiteArrow}
//                                 alt="Left Arrow"
//                                 width={16}
//                                 height={16}
//                                 quality={100}
//                                 className="transition-all duration-300 ease-in-out transform translate-x-0 opacity-100 group-hover:translate-x-3 group-hover:opacity-0"
//                                 />
//                                 </button>
//                                 <div className="w-full h-3/4 bg-white">

//                                 </div>
//                             </div>
//                             <div className="w-3/5 h-full bg-red-500">

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Slide 3 */}
//                 <div className="keen-slider__slide flex justify-center items-center gap-1 ">
//                     <div className="relative w-3/5 h-full ">
//                         <Image 
//                         src={projectC}
//                         alt="A"
//                         fill
//                         />
//                     </div>
//                     <div className="w-2/5 h-full flex flex-col gap-1">
//                         <div className="relative w-full h-3/5 bg-black">
//                             <Image 
//                             src={projectD}
//                             alt="B"
//                             fill
//                             />
//                         </div>
//                         <div className="relative w-full h-2/5 flex gap-1">
//                             <div className="w-2/5 flex flex-col gap-1">
//                                 <button className="w-full h-1/4 min-h-16 border border-white flex items-center justify-center gap-3 text-white transition-all duration-300 ease-in-out relative group hover:bg-white hover:text-black">
//                                 <span className="transition-all duration-500 group-hover:translate-x-1.5 ease-in-out">Take a look</span>
//                                 <Image 
//                                 src={whiteArrow}
//                                 alt="Left Arrow"
//                                 width={16}
//                                 height={16}
//                                 quality={100}
//                                 className="transition-all duration-300 ease-in-out transform translate-x-0 opacity-100 group-hover:translate-x-3 group-hover:opacity-0"
//                                 />
//                                 </button>
//                                 <div className="w-full h-3/4 bg-white">

//                                 </div>
//                             </div>
//                             <div className="w-3/5 h-full bg-red-500">

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Buttons */}
//             <button
//                 className="absolute w-20 h-4/5 left-0 top-1/2 -translate-y-1/2 hover:bg-[#2b2b2b] hover:w-16 transition-all duration-200 ease-in-out flex items-center justify-center "
//                 onClick={() => instanceRef.current?.prev()}
//             >
//                 <Image 
//                 src={arrowLeft}
//                 alt="Left Arrow"
//                 width={50}
//                 height={50}
//                 quality={100}
//                 />
//             </button>
//             <button
//                 className="absolute w-20 h-4/5 right-0 top-1/2 -translate-y-1/2 hover:bg-[#2b2b2b] hover:w-16 transition-all duration-200 ease-in-out flex items-center justify-center "
//                 onClick={() => instanceRef.current?.next()}
//             >
//                 <Image 
//                 src={arrowRight}
//                 alt="Left Arrow"
//                 width={50}
//                 height={50}
//                 quality={100}
//                 />
//             </button>

//             {/* Pagination Dots */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {[...Array(3)].map((_, i) => (
//                 <button key={i} className="w-3 h-3 bg-white opacity-50"></button>
//                 ))}
//             </div>
//         </div>
//     );
// }
