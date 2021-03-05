import React, {useLayoutEffect, useEffect,useState} from 'react'
import Dropdown from '../components/dropdown';
import Navbar from '../components/navBar/navBar';
import { useLocation } from 'react-router-dom'
import Aos from 'aos';
import Footer from '../components/footer';
import SearchArea from '../components/PRCcomps/searchArea';
import GloballStyle from '../globalStyles';
import Continer from '../components/PRCcomps/container';


function Plants() {

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
            <Continer pageName="Plants"/>
            <Footer/>
        </>
    )
}

export default Plants;
