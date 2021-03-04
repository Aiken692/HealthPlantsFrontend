import React, {useLayoutEffect, useEffect,useState} from 'react'
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom'
import Aos from 'aos';
// import styled from 'styled-components';
// import { isStyledComponent } from 'styled-components';
import Footer from '../components/Footer';
import SearchArea from '../components/PRCcomps/searchAreaCardiac';
import GloballStyle from '../globalStyles';
// import Continer from '../components/PRCcomps/container';
import Details from '../components/PRCcomps/details/jointCardicaDetail';


function Cardiac() {

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
            <Details />
            <Footer/>
        </>
    )
}

export default Cardiac;
