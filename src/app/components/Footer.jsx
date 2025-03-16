import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import linkedin from '@/public/images/footer/linkedin.svg'
import whatsApp from '@/public/images/footer/whatsapp.svg'
import instagram from '@/public/images/footer/instagram.svg'
import facebook from '@/public/images/footer/facebook.svg'
import email from '@/public/images/footer/email.svg'

const Footer = () => {
    return (
        <footer className="w-dvw bg-[#101010] text-white px-[3%] pt-[8%] ">
            <div className="flex flex-col items-center md:flex-row lg:justify-between lg:items-start ">
                {/* Left Section - Logo & Address */}
                <div className="lg:w-1/3 ">
                    <h5 className=" text-[#ffd401] text-[4vw] lg:text-[2vw] uppercase ">
                        Bishoy Morgan
                    </h5>
                </div>

                <div className='w-full lg:w-3/5 flex justify-center items-center lg:items-start lg:justify-end gap-x-[4%] mt-[8%] lg:mt-0 '>
                    {/* Center Section - Navigation */}
                    {/* <div className="w-1/2 h-[18vh] mt-[10%] md:mt-0 "> */}
                        {/* <Link href="#" className="p4 text-[#fafafa] hover:text-[#fafafa]/30 ">Home</Link> */}
                        {/* <Link href="#" className="p4 text-[#fafafa] hover:text-[#fafafa]/30 ">Web design</Link>
                        <Link href="#" className="p4 text-[#fafafa] hover:text-[#fafafa]/30 ">Portfolio</Link>
                        <Link href="#" className="p4 text-[#fafafa] hover:text-[#fafafa]/30 ">Web development</Link>
                        <Link href="#" className="p4 text-[#fafafa] hover:text-[#fafafa]/30 ">Dedicated teams</Link>
                        <Link href="#" className="p4 text-[#fafafa] hover:text-[#fafafa]/30 ">Mobile development</Link> */}
                    {/* </div> */}

                    {/* Right Section - Social Media */}
                    <div className="w-4/5 lg:w-1/3 h-[6vh] lg:h-[8vh] flex gap-x-[7%]   ">
                        <Link 
                        href="http://www.linkedin.com/in/bishoy-morgan-ba979a310" target='_blank' 
                        className="flex items-center justify-center border border-[#ffd401] w-1/2 h-full rounded-md hover:bg-[#ffd401]/15 transition-all duration-200 ease-in-out">
                            <Image 
                            src={linkedin}
                            alt='linkedin'
                            width={24}
                            height={24}
                            className='w-[6vw] lg:w-[2vw]  '
                            />
                        </Link>
                        <Link 
                        href="https://www.instagram.com/bisho_tawfiles?igsh=enA2cmNwcjIza3l2" target='_blank' 
                        className="flex items-center justify-center border border-[#ffd401] w-1/2 h-full rounded-md hover:bg-[#ffd401]/15 transition-all duration-200 ease-in-out">
                            <Image 
                            src={instagram}
                            alt='Instagram'
                            width={24}
                            height={24}
                            className='w-[7vw] lg:w-[2.2vw]  '
                            />
                        </Link>
                        <Link 
                        href="mailto:bishoy.morgan95@gmail.com" target='_blank' 
                        className="flex items-center justify-center border border-[#ffd401] w-1/2 h-full rounded-md hover:bg-[#ffd401]/15 transition-all duration-200 ease-in-out">
                            <Image 
                            src={email}
                            alt='email'
                            width={24}
                            height={24}
                            className='w-[7vw] lg:w-[2vw]  '
                            quality={100}
                            />
                        </Link>
                        <a
                            href="https://wa.me/201032700340?text=Hello!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center border border-[#ffd401] w-1/2 h-full rounded-md hover:bg-[#ffd401]/15 transition-all duration-200 ease-in-out"
                        >
                                <Image 
                                src={whatsApp}
                                alt='WhatsApp'
                                width={24}
                                height={24}
                                className='w-[7vw] lg:w-[2.1vw]  '
                                />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-[2.326vw] lg:text-[0.633vw] lg:leading-[ 1vh] font-semibold tracking-widest mt-[8%] mb-[2%] text-[#fafafab3]">
                <span className="block uppercase">© 2025 BISHOY MORGAN. ALL RIGHTS RESERVED</span>
            </div>
        </footer>
    );
};

export default Footer;


