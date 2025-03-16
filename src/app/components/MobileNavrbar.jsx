'use client'
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LinkButtonComp } from "./FormComp";
import Image from "next/image";
import menu from '@/public/images/mobile/navbar/menu.svg'
import close from '@/public/close.svg'

const MobileNavbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openNavbar, setOpenNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1800);
    }, []);

    // Prevent scrolling when navbar is open
    useEffect(() => {
        if (openNavbar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [openNavbar]);

    const scrollToSection = (id) => {
        if (typeof window !== "undefined") {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: isVisible ? "0%" : "-100%", opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed top-[2%] left-0 px-[4%] w-full flex items-center bg-transparent z-50"
        >
            <div className="w-full flex justify-between items-center">
                <div className="relative flex items-center px-[4%] py-[1%] bg-[#101010] rounded-md">
                    <h5 className="text-[4vw] text-[#ffd401] uppercase">Bishoy Morgan</h5>
                </div>
                <button onClick={() => setOpenNavbar(true)}>
                    <Image 
                        src={menu}
                        alt="Menu"
                        width={24}
                        height={24}
                    />
                </button>
            </div>

            {/* Animated Mobile Navbar */}
            <AnimatePresence>
                {openNavbar && (
                    <motion.div 
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }} // Move down when closing
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full h-full pt-[5%] pb-[10%] bg-[#101010] flex flex-col justify-between items-center"
                    >
                        {/* Close Button */}
                        <button 
                            className="w-full h-[6%] pr-[5%] flex items-center justify-end" 
                            onClick={() => setOpenNavbar(false)}
                        >
                            <Image 
                                src={close}
                                alt="Close Button"
                                width={30}
                                height={30}
                                className="hover:scale-80 transition-all duration-300 ease-out"
                            />
                        </button>

                        {/* Navigation Links */}
                        <div className="w-full h-4/5 py-[3%] flex flex-col items-center justify-center gap-y-[8%]">
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("services-section");
                                }}
                                className="text-[7.442vw] leading-[10.233vw] font-medium w-1/3 hover:text-[#ffd401] text-center text-white"
                            >
                                Services
                            </Link>
                            
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("portfolio-section");
                                }}
                                className="text-[7.442vw] leading-[10.233vw] font-medium w-1/3 hover:text-[#ffd401] text-center text-white"
                            >
                                Portfolio
                            </Link>
                            
                            <a
                                href="/files/Resume.pdf"
                                download="Bishoy_Morgan_Resume.pdf"
                                className="text-[7.442vw] leading-[10.233vw] font-medium w-1/3 hover:text-[#ffd401] text-center text-white"
                            >
                                Resume
                            </a>
                        </div>

                        {/* Contact Button */}
                        <Suspense>
                            <LinkButtonComp href={`/?showPopup=${true}`}>
                                <button
                                    className="w-[23vw] h-[5.4vh] border border-[#ffd401] rounded-md text-[2.791vw] leading-[3.721vw] text-center font-bold transition-all duration-300 ease-out hover:bg-[#ffd401]/15 text-white backdrop-blur-sm"
                                >
                                    Contact
                                </button>
                            </LinkButtonComp>
                        </Suspense>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default MobileNavbar;
