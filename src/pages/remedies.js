import React, {useLayoutEffect, useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom'
import Aos from 'aos';
import Dropdown from '../components/dropdown';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import Continer from '../components/PRCcomps/container';
import SearchArea from '../components/PRCcomps/searchAreaRem';
import GloballStyle from '../globalStyles';


function Remedies() {

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
            <Continer pageName="Remedies"/>
            <Footer/>
        </>
    )
}

export default Remedies;
