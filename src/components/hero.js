import React, {useState, useRef, useEffect} from 'react';
import styled, {css} from 'styled-components/macro';
import { IoArrowBack, IoArrowForward} from 'react-icons/io5'
import {motion, AnimatePresence} from 'framer-motion';


const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hiiden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%; 
    height: 100%;
`;


const HeroSlider = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%,
        );
    }
`;


const HeroImage= styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;


const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 10vw, 2rem);
        font-weight: 4 00;
        text-tansform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4)
    }
`;


const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10; 

`;


const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`



const Hero = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(
        () => {
        const nextSlide = () => {
          setCurrent(current => (current === length - 1 ? 0 : current + 1));
        };

        timeout.current = setTimeout(nextSlide, 10000);

        return () => {
            if(timeout.current) {
                clearTimeout(timeout, current);
            }
        };
    }, [current, length]
    );

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout, current);
        }

        setCurrent(current === length - 1 ? 0: current + 1)

    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    };


    const fadeAnimation = {
        hidden: { opacity: 0}, 
        visible: {opacity: 1, transition: { duration: 0.8}}, 
        exit: {opacity: 0}
    }

    return (
        
        <HeroSection>
            <HeroWrapper>
                <AnimatePresence>
                 { slides.map((slide, index) => {
                     return (
                         <HeroSlide key={index}>
                             {index === current && (
                                 <HeroSlider>
                                 <HeroImage src={slide.image} initial='hidden' animate='visible' exit='exit' variants={fadeAnimation} />
                                 <HeroContent>
                                     <h1 data-aos='fade-down' data-aos-duration='600' >{slide.title}</h1>
                                     <h5 data-aos='fade-down' data-aos-duration='600' data-aos-delay='200'>{slide.label}</h5>
                                     <p data-aos='zoom-out' data-aos-duration='500' data-aos-delay='300'>{slide.alt}</p>
                                 </HeroContent>
                             </HeroSlider>
                             )}
                             
                         </HeroSlide>
                     )
                 })}
                </AnimatePresence> 
            </HeroWrapper>
            <SliderButtons>
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>
              
        </HeroSection>
    )
}

export default Hero
