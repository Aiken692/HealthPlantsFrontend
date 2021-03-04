import React from 'react'
import styled, {css} from 'styled-components/macro';
import Jamie from '../images/Jamie.jpg'



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
    height: 70%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }

}

`;

const AboutSection = ({heading, paragraphOne, reverse, image, delay}) => {



    return (
        <Section>
            <Container>
                <ColumnLeft reverse={reverse}
                            data-aos='fade-down'
                            data-aos-duration='1000'
                            data-aos-once='true'
                            data-aos-delay={delay}
                            data-aos-anchor-placment='center bottom'
                            >
                    <h1>The history and the vision</h1>
                    <p>
Uganda has an optimal climate and soil for the growth of a multitude of plants with health properties,
some now well-known such as Avocado, Aloe Vera, Chia, but a large number known only to local
village communities, and largely unknown in the world at large. HPOU seeks to change that.<br/><br/>
Founder, Jamie MacAlister, came to Uganda in 2017 with his wife, Jenny, to help set up the School of Business & Applied Technology (SoBAT) at Clarke International University (CIU), Uganda.  Up to that point, CIU was primarily a medical university known as International Health Sciences University.  Jamie was invited by Dr Ian Clarke, the founder of the university, to set up the new faculty, following on from his experience in a leadership role at Hult Ashridge, a business school in the UK.<br/><br/>
<b>Clarke International University (CIU) was born in 2007 as International Health Science University, set
up by the International Medical Group (IMG), Uganda’s largest private health organisation. In 2017,
CIU set up the School of Business & Applied Technology, with a vision to develop Uganda’s
capabilities to create develop technology and business skills and to develop export-oriented
businesses.</b>
</p>
                  
                    
                </ColumnLeft>
                    
                <ColumnRight reverse={reverse}>
                    <img src={Jamie} alt='plant'
                    data-aos='zoom-in'
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

export default AboutSection
