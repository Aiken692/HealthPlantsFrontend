import React, {useState, useEffect, useLayoutEffect} from 'react'
import Features from '../components/features'
import Hero from '../components/hero'
import InfoSection from '../components/infoSection'
import Listings from '../components/listings'
import { SliderData } from '../data/sliderData'
import { InfoData} from '../data/infoData'
import Footer from '../components/footer'
import Dropdown from '../components/dropdown'
import Navbar from '../components/navBar/navBar'
import GloballStyle from '../globalStyles'

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
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
