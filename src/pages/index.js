import React, {useState, useEffect, useLayoutEffect} from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import Listings from '../components/Listings'
import { SliderData } from '../data/SliderData'
import { InfoData} from '../data/InfoData'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown'
import Navbar from '../components/Navbar/Navbar'
import GloballStyle from '../globalStyles'

import { useLocation } from 'react-router-dom'
import Aos from 'aos';







const HomePage = () => {

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
      }
    
      useLayoutEffect(() => {
        window.scrollTo(0,0)
      },[location.pathname])
    
      useEffect(() => {
        Aos.init({});
        
      }, []);



    return (
        <>
            <GloballStyle/>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>
            <Listings/>
            <Features/>
            <Footer/> 
        </>
    )
}

export default HomePage;
