import React from 'react';
import classes from '../components/login/login.scss';
import styled from 'styled-components';


//____ body
const FormBody = styled.body`
     font-family: 'Montserrat', sans-serif;
     background: #f6f5f7;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 100vh;
     margin: 20px 0 50px;
     /* padding: 0; */
     margin: 0;
     box-sizing: border-box;
     h1{
         font-weight: bold;
         margin: 0;
     }
     p{
         font-size: 14px;
         font-weight: 100;
         line-height: 20px;
         letter-spacing: 0.5px;
         margin: 20px 0 30px;
     }

     span{
         font-size: 12px;
     }
     a{
         color: #333;
         font-size: 14px;
         text-decoration: none;
         margin: 15px 0;
     }
`;

//_____ container
const Container = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
            0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
`;

//______ form container

const FormContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    form{
        background: #fff;
        /* background: black; */
        display: flex;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

//____ social container
const SocialContainer = styled.div`
            margin: 20px 0;
            a{
                border: 1px solid #ddd;
                border-radius: 50%;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin: 0 5px;
                height: 40px;
                width: 40px;
            }
`;

const Input = styled.input`
            background: #eee;
            border: none;
            padding: 12px 25px;
            margin: 8px 0;
            width: 100%;
`;

const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #007000;
    background: #007000;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus{
        outline: none;
    }
    &.ghost{
        background: transparent;
        border-color: #fff;
    }
`;


const login = () => {

        // const backBtn = document.getElementById('backbtn');
        // const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        // backBtn.addEventListener('click', () =>{
        //     container.classList.add("rightPanelActive")
        // })

        // signInButton.addEventListener('click', () =>{
        //     container.classList.remove("rightPanelActive")
        // })
        function slide(){
            container.classList.add("rightPanelActive")
        }
        
        function zlide (){
            container.classList.remove("rightPanelActive")
        }
       
    return (
        <>
        <FormBody>
            <Container id="container">
                <FormContainer className="rightContainer">
                    <form action="#">
                        <h1>Create account</h1>
                        <SocialContainer >
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </SocialContainer>
                        <span>or use emain for regirstration</span>
                        <Input type="text" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Button>Back</Button>
                    </form>
                </FormContainer>

                <FormContainer className=" signinContainer">
                    <form action="#">
                        <h1>Sign in</h1>
                        <SocialContainer className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </SocialContainer>
                        <span>or use your account</span>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <a href="../UserManagement" className="here"> Forgot your passsword</a>
                        <Button href="../UserManagement">Sign in </Button>
                    </form>
                </FormContainer>

                <div className="overlayContainer">
                    <div className="overlay">
                        <div className="overlayPanel overlayLeft">
                            <h1>Welcome Back</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <Button className="ghost" id="signIn" onClick={zlide}>Sign In</Button>
                        </div>

                        <div className="overlayPanel overlayRight">
                            <h1>Hello, Friend</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <Button className="ghost" id="backbtn" onClick={slide}>Back</Button>
                        </div>
                    </div>
                 </div>            
            </Container>
            </FormBody>
        </>
    )
}
//sliding functions

export default login
