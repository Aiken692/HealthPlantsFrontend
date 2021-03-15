import React, {useState, useEffect, useLayoutEffect} from 'react';
import styled, {css} from 'styled-components/macro';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Aos from 'aos';
import styles from '../pages/contact.scss';
import Navbar from '../components/navBar/navBar';
import Dropdown from '../components/dropdown';
import Footer from '../components/footer';
import * as FaIcons from "react-icons/fa";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import nature from '../images/nature.jpeg'

const ConImage= styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;


const Icons = css`
    font-size: clamp(1rem, 4vw, 1rem);
    margin-right: 1.5rem;
    color: #cd853f;
    transition: 0.3s all ease-in-out;
    border-radius: 30%;
    
    
    
    &:hover{
        background: white;
       

    }
`;
    

const Facebook = styled(FaFacebookF)`
    ${Icons}
`;
const Instagram = styled(FaInstagram)`
    ${Icons}
`;
const LinkedIn = styled(FaLinkedinIn)`
    ${Icons}
`;
const Youtube = styled(FaYoutube)`
    ${Icons}
`;





const Contact = () => {


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

            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>

            <div className='container'>
            
            
                {/* <h1 style={{position: 'relative'}}>Contact Us</h1>
                <p className='sub'>lorem ipsum</p> */}

                <ConImage src={nature}/>

                <div id='contact-container' data-aos='zoom-out'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    data-aos-anchor-placment='center bottom'> 
                <div className='contact-info'>
                    <h4>Contact Information</h4>
                    <p>For further information about anything relating to this website, please contact us by completing the form below:</p>
                    <div className='icon-text'>
                            <i class="fas fa-phone-volume"><FaIcons.FaPhoneVolume/></i>
                        <span>+44-7710-397824</span>
                        </div>

                        <div className='icon-text'>
                            <i class="fas fa-phone-volume"><FaIcons.FaEnvelope/></i>
                        <span> jamie@blonay.co.uk</span>
                        </div>
                        <div className='icon-text'>
                            <i class="fas fa-phone-volume"><FaIcons.FaMapMarkerAlt/></i>
                        <span>Plot 57B, Luthuli Avenue, Bugolobi Kampala, Uganda</span>
                    </div>
                    <div className='social-media'>
                        <a href="#" className="icon-circle">
                            <Facebook/>
                        </a>
                        <a href="#" className="icon-circle">
                            <Instagram/>
                        </a>
                        <a href="#" className="icon-circle">
                            <LinkedIn/>
                        </a>
                        <a href="#" className="icon-circle">
                            <Youtube/>
                        </a>
                    </div>
                </div>

                        <form>
                            <div className="col">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="country" />
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label>Comment</label>
                                    <textarea></textarea>
                                </div>
                                
                            </div>

                            <div className="col">
                                <div className="form-group right">
                                    <button className="primary">Submit</button>
                                </div>
                                
                            </div>


                            

                        </form>
                    </div>
                </div>
                {/* <Footer/>  */}
          

        </>
        
        
    )
}

export default Contact
