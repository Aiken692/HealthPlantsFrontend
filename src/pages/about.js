import React, {useState, useEffect, useLayoutEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import Aos from 'aos';
import styled from 'styled-components/macro';
import GloballStyle from '../globalStyles'
import Dropdown from '../components/dropdown'
import Navbar from '../components/navBar/navBar'
import Footer from '../components/footer'
import Logo from '../images/logo.jpeg'
import AboutSection from '../components/aboutSection';
import WhySection from '../components/whySection';
import UgSection from '../components/ugSection';


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 5em calc((100vw - 1300px) /2);

`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 0rem;
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
const Boss = styled.div`
    padding: 3rem clac((100vw -1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr; 
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    lineheight: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
    }
`;

const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }

}

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
