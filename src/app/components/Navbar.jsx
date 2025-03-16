'use client'
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkButtonComp } from "./FormComp";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`fixed top-[2%] left-0 px-[2%] w-full flex items-center bg-transparent z-50  `}
        >
            <div className="w-full flex justify-between items-center">
                <div className={`relative flex items-center px-[1%] bg-[#101010] rounded-md`}>
                    <h5 className="text-[2vw] text-[#ffd401] uppercase ">Bishoy Morgan</h5>
                </div>
                <div className="w-[30%] flex justify-between items-center ">
                    <div className="bg-[#101010] w-[70%]  py-[3%] flex items-center border border-[#1d1d1d] rounded-md">
                        {/* Services Section */}
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("services-section");
                            }}
                            className={`p2 w-1/3 hover:text-[#ffd401] text-center font-bold text-[#fafafa] `}
                        >
                            Services
                        </Link>
                        
                        {/* Portfolio Link */}
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("portfolio-section");
                            }}
                            className={`p2 w-1/3 hover:text-[#ffd401] text-center font-bold text-[#fafafa] `}
                        >
                            Portfolio
                        </Link>
                        
                        {/* Services Link */}
                        <a
                            href="/files/Resume.pdf"
                            download="Bishoy_Morgan_Resume.pdf"
                            className={`p2 w-1/3 hover:text-[#ffd401] text-center font-bold text-[#fafafa]`}
                        >
                            Resume
                        </a>
                    </div>

                    {/* Contact Us Button */}
                    <Suspense>
                        <LinkButtonComp href={`/?showPopup=${true}`}>
                            <button
                                className={`w-[6.5vw] h-[6.4vh] border border-[#ffd401] rounded-md p2  text-center font-bold transition-all duration-300 ease-out hover:bg-[#ffd401]/15 text-white cursor-pointer ${isVisible && 'backdrop-blur-sm'} `}
                            >
                                Contact
                            </button>
                        </LinkButtonComp>
                    </Suspense>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
