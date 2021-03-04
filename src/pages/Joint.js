import React, {useLayoutEffect, useEffect,useState} from 'react'
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom'
import Aos from 'aos';
import Footer from '../components/Footer';
import SearchArea from '../components/PRCcomps/searchAreaJoint';
import GloballStyle from '../globalStyles';
import Continer from '../components/PRCcomps/container';


function Joint() {

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
            <SearchArea />
            <Continer pageName="Joint"/>
            <Footer/>
        </>
    )
}

export default Joint;
