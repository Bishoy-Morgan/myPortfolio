'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import close from '@/public/close.svg'
import FormComp from './FormComp';


const Popup = () => {
    const [load, setLoad] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        const abcd = searchParams.get("showPopup");
        setPopupVisible(!!abcd); 
    }, [searchParams]);

    const handleClosePopup = () => {
        router.back();
    };

    return (
        isPopupVisible && (
            <section className='fixed z-[99999999] top-0 left-0 w-full h-svh backdrop-blur-sm flex justify-center items-center '>
                <div className='relative w-full lg:w-[35%] bg-[#101010] flex flex-col justify-center items-center pt-[12%] pb-[12%] lg:pt-[3%] lg:pb-[1%] rounded-br-xl rounded-tl-xl'>
                    <h3 className='p5 font-semibold text-white'>Quick Contact</h3>
                    <span className='mt-[2%] mb-[1%]  p3 lg:text-[0.693vw] lg:leading-[0.991vw] tracking-wider text-[#fafafab3] uppercase'>
                        I will respond to you within 1 business day
                    </span>
                    <button
                        onClick={handleClosePopup}
                        className='absolute top-[4%] right-[4%] w-[6vw] h-[3vh] lg:w-[2vw] cursor-pointer'
                    >
                        <Image 
                        src={close}
                        alt='Close Button'
                        width={40} 
                        height={40} 
                        className='hover:scale-80 transition-all duration-300 ease-out'
                        />
                    </button>
                    <div className='w-4/5 flex flex-col items-center '>
                        <FormComp 
                        formName={"popupForm"} 
                        setLoad={setLoad}
                        />
                        <label
                            htmlFor="popupForm-submit"
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
                        <div className='w-full mt-[7%] flex items-center justify-center  '>
                            <span className='inline-block p3 text-paleWhite '>You can directly mail me &nbsp;
                                <a href="mailto:example@email.com" className=' text-[#fafafacc] hover:text-[#ffd401]'> Send Email</a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
};

export default Popup
