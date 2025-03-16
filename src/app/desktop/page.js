import React, { Suspense } from 'react'
import HeroSection from '../components/HeroSection'
import Logos from '../components/LogoSection'
import Experience from '../components/Experience'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Popup from '../components/Popup'


const page = () => {
    return (
        <main>
            <HeroSection />
            <Logos />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <ContactUs />
            <Footer />
            <Suspense>
                <Popup />
            </Suspense>
        </main>
    )
}

export default page
