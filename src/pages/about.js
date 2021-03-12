import React, {useState, useEffect, useLayoutEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Aos from 'aos';
import Dropdown from '../components/dropdown';
import Navbar from '../components/navBar/navBar';
import styled from 'styled-components/macro';
import Footer from '../components/footer';
import AboutSection from '../components/aboutSection';
import WhySection from '../components/whySection';
import UgSection from '../components/ugSection';
import Logo from '../images/logo.jpeg';
import GloballStyle from '../globalStyles';


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 5em calc((100vw - 1300px) /2);

`;

const Container = styled.div`
    height: auto;
    width: 100%;
    padding: 2rem 0rem;
    /* background:red; */
`;

const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2rem 1rem;
    margin-bottom: 40px;
    background: rgb(202, 255, 202, 1);
    text-align: center;
   

    @media screen and (max-width: 768px) {
        text-align: start;
    }


`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-left: 12%;
    
`;


const About = () => {

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

            <Section>
                <Container>
                    <Heading>
                        <h1 style={{fontSize: '60px', fontFamily: 'Gentona'}}
                        data-aos='fade-right'
                        data-aos-duration='1000'
                        data-aos-once='true'
                        data-aos-anchor-placement='center bottom'
                        >About Health Plants of Uganda</h1>
                    </Heading>

                    <div className="title" style={{display:'flex', flexDirection: 'flex-start'}}
                        data-aos='fade-right'
                        data-aos-duration='1000'
                        data-aos-once='true'
                        data-aos-anchor-placement='center bottom'>
                            <Image src={Logo} />
                            <p style={{paddingLeft: '14%', paddingTop: '5%'}}><b>Health Plants of Uganda (HPOU)</b> is a social enterprise in partnership with Clarke International
                            University (CIU) of <b>Uganda with a vision to promote global health and wellbeing through Uganda’s
                            natural assets</b>, while creating sustainable and scalable prosperity for Uganda through value-added
                            exports. <br/><br/>
                            
                        Health Plants of Uganda is core funded by The African Kingdom Trade & Investment Company
                        (TAKTIC), Uganda and Blonay Ltd, UK
                            </p>
                    </div>

                    <AboutSection/>
                    <WhySection/>
                    <UgSection/>
                </Container>
            </Section>
            <Footer/>
        </>
    )
}

export default About
