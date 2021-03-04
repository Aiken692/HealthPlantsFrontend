import React from 'react'
import styled from 'styled-components/macro';
import ImageOne from '../images/uganda.jpg'

const Section = styled.section`
    padding: 12rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
    background: #fff;
    padding: 3rem 0rem;
    position: relative;
`;

const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;


const ColumnLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px;
    justify-content: flex-start;
    padding: 1rem;

    
`;


const ColumnRight = styled.div`
    position: absolute;
    top: -10%;
    right: 0;
    max-width: 850px;
    height: 140%;
    width: 45%;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        height: 320px;
        top: -65px;
        width: 80%;
        margin: 0 auto;
        left: 0;
    }
`;


const Content = styled.div`
    flex: 0 0 50%;

    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 200px;
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 2rem;

    }

    p {
        margin-bottom: 1rem;
        line-height: 1.5;
    }
`;


const Image = styled.img`
    height: 30%;
    width: 100%;
    object-fit: cover;
`;



const UgSection = () => {
    return (
        <Section>
        <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content
                        data-aos='fade-left'
                        data-aos-duration='1200'
                        data-aos-once='true'
                        data-aos-delay='300'
                        data-aos-anchor-placement='center bottom'
                        >
                            <h1>Why Uganda?</h1>
                            <p><b>First to say that the plants listed on this website are grown in many different parts of the world, and
                            the information on this website is probably relevant wherever the plants can be found.</b><br/><br/>
                            However, our starting point in this venture is plants that we know grow in Uganda, and our mission as
                            expressed by our strapline “Natural wellbeing for the world – Prosperity for Uganda”, is to support the 
                            economy of Uganda, one of the lowest-income countries in the world by promoting not only its natural
                            resources but also its growing expertise in the area of health and technology.
                            Uganda is an equatorial country at high altitude, surrounded by fresh water and sandwiched between
                            the eastern and western African rift valleys. This makes it fertile land, and an ideal place for a wide
                            variety of different plants and trees to grow.
                            Being on the equator means that the temperature stays fairly consistent throughout the year, between
                            15 degrees C and 30 degrees C and never drops to temperatures which can be the cause of failure
                            for many plants. Combining this with altitude and the prevalence of water from inland lakes, most
                            notably Lake Victoria, the second largest lake by surface area in the world, means that there is plenty
                            of rain in much of the country. The growing season repeats twice in the year: two wet seasons and
                            two dry seasons per year.


                            </p>
                            
                                </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={ImageOne}
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-once='true'
                        data-aos-anchor-placement='center bottom'
                        />
                        <p
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-once='true'
                        data-aos-anchor-placement='center bottom'>Uganda sits between the eastern and western Great African Rift Valley system. The past volcanic
                        activity in the rift valleys themselves has led to a rich soil ideal for grasslands, which attract animals to
                        feed. Hence these valleys are the primary location for safari parks. These features spill over into the
                        neighbouring land, leading to a rich diversity of plant life, combined with a wide range of soil acidity,
                        and clay/loam/sand combinations. For example the higher mountainous land around the Rift Valley
                        system is ideal for Arabica coffee, the lower land nearer lakes where there is also plenty of rain for
                        Robusta coffee, tea, bananas, maize, sorghum, fruit trees etc. Interspersed with these major cash
                        crops are opportunities to grow the more specialised health plants listed on this website, many of
                        which grow naturally in the wild.
                                                <br/><br/><b>Finally, Uganda is the place where the longest river in the world, the Nile, starts from Lake Victoria the
                        main part of its flow northwards, throughout northern Uganda, and beyond across the Sahara desert,
                        eventually emptying into the Mediterranean Sea. The area of the “source” at Lake Victoria, Jinja, is
                        one such highly fertile area in Uganda, and because of the Biblical asso</b></p>
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    )
}

export default UgSection
