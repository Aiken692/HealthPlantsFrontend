import styled from 'styled-components/macro';
import React from 'react';
import {Button } from './navBar/button'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;


const Container = styled.div`
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


const InfoSection = ({heading, paragraphOne, buttonLabel,reverse, image, delay}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft reverse={reverse}
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            data-aos-once='true'
                            data-aos-delay={delay}
                            data-aos-anchor-placment='center bottom'
                            >
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                  
                    <Button to='/plants' primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                    
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='plant'
                    data-aos='zoom-out'
                    data-aos-duration='1000'
                    data-aos-once='true'
                    data-aos-delay={delay}
                    data-aos-anchor-placment='center bottom'
                    />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
