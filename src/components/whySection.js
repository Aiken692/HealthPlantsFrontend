import React from 'react'
import styled from 'styled-components/macro';

import TeaOne from '../images/image-7.jpg' 





const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem calc((100vw - 1300px) /2);

`;


const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 0rem 0rem;
`;


const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2em 1rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
        margin-bottom:0rem;
        padding-bottom:0;
        /* background:red; */
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

const P = styled.p`
text-align:center;
padding-right:6rem;
padding-left:6rem;
font-size:large;
font-style:italic;
`;


const InfoWrap = styled.div`
    padding: 0rem 1rem;
    padding-left:2rem;
    padding-right:2rem;
    /* min-height: 550px; */
    height: auto;
    width: 50%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px){
        margin-bottom: 1rem;
        width:100%;
    }
`;


const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 600px;
    object-fit: cover;
    margin-bottom: 1rem;
`;








const WhySection = () => {
    return (
        <Section>

            <Container>
                <Heading>
                    <h1
                    data-aos='fade-left'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >Why health plants?</h1>
                </Heading>
                <InfoRow className="row">
                    <InfoWrap
                    data-aos='zoom-out-down'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <Image src={TeaOne} alt='home'/>
                       
                        
                        
                       
                        
                    </InfoWrap>
                    <InfoWrap
                    data-aos='zoom-out-down'
                    data-aos-duration='1200'
                    data-aos-once='true'
                    data-aos-anchor-placement='center bottom'
                    >
                        <p><b>Plants are fundamental not only for basic nutrition but also for general health, by enhancing health &
                        fitness, preventing disease or providing cures from disease and health conditions.</b> Many medicines
                        have been historically based on extracts from plants. But while the global population suffers from
                        increasing ill-health and disease, many of the health properties of a wide variety of plants remain
                        largely unknown to the global population. Meanwhile we discover that the products and practices of
                        medical science and pharmaceutical companies don’t have all the answers to our health challenges.<br/><br/>
                        Understanding and making use of the healing properties of plants is an ancient African tradition.
                        These have historically been largely disregarded by developed country medical science partly
                        because that they have been associated with dark spiritual practices (aka witchcraft) for the personal
                        gain of the practitioner. While these two aspects clearly have been connected, there is no reason
                        why they need to be. And the world has effectively “thrown out the baby with the bathwater”. We
                        can throw out the unhealthy dark spiritual “bathwater”, but keep the “baby” which is a huge variety of
                        plants, many not well known, with health benefits.<br/><br/>
                        
                        </p> 
                        
                        
                        
                        
                       
                    </InfoWrap>
                </InfoRow>
                <P><b>This website seeks to change that by offering website visitors an easy way to explore and exchange
                        views on the health properties of different plants, their constituent parts (fruits, leaves, roots, bark)
                        and their associated “remedies”.</b></P>
            </Container>
        </Section>
    )
}

export default WhySection
