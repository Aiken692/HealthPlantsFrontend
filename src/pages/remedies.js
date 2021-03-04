import React, {useLayoutEffect, useEffect,useState} from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import Aos from 'aos';
import styled from 'styled-components';
import { isStyledComponent } from 'styled-components';
import Dropdown from '../components/dropdown';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import SearchArea from '../components/PRCcomps/searchAreaRem';
import GloballStyle from '../globalStyles';
import Continer from '../components/PRCcomps/container';


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
