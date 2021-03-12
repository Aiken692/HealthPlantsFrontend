import React, {useLayoutEffect, useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom'
import Dropdown from '../components/dropdown';
import Navbar from '../components/navBar/navBar';
import Aos from 'aos';
import Footer from '../components/footer';
import SearchArea from '../components/PRCcomps/searchAreaConditions';
import GloballStyle from '../globalStyles';
import Continer from '../components/PRCcomps/conditionsContainer';



function Conditions() {

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
          <Continer />
          {/* <Details /> */}
          <Footer/>

      </>
  )
}

export default Conditions;
