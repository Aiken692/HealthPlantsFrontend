import React from 'react'
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import TeaOne from '../images/tea2.jpg' 
import DiseaseOne from '../images/disease.jpg' 
import {Button } from './navBar/button'



const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 10rem calc((100vw - 1300px) /2);

`;


const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 1rem;
`;


const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2em 1rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }

`;
const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;


const InfoWrap = styled.div`
    padding: 0rem 1rem;
    min-height: 550px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px){
        margin-bottom: 1rem;
    }
`;


const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000d1a;
    width: 140px;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }
`;


const Arrow = styled(AiOutlineArrowRight)`
    margin-left: 10px;
`;

const Listings = () => {
    return (
        <Section>

            <Container>
                <Heading>
                    <h1
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >Health Plants.</h1>
                </Heading>
                <InfoRow>
                    <InfoWrap
                    data-aos='zoom-out-up'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <Image src={TeaOne} alt='home'/>
                        <h2>Remedies</h2>
                        
                        <InfoLink>
                            <Button primary='true' to='/remedies'>
                                <p style={{color: '#fff'}}>View Details</p>
                                <Arrow/>
                            </Button>
                        </InfoLink>
                       
                        
                    </InfoWrap>
                    <InfoWrap
                    data-aos='zoom-out-down'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <Image src={DiseaseOne} alt='home' css={`
                            margin-top: 120px;

                            @media screen and (max-width: 768px) {
                                margin-top: 0px;
                            }

                        `} />
                        <h2>Conditions</h2>
                        
                        <InfoLink>
                            <Button primary='true' to='/condition'>
                                <p style={{color: '#fff'}}>View Details</p>
                                <Arrow/>
                            </Button>
                        </InfoLink>
                        
                       
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    )
}

export default Listings
