import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import classes from '../components/login/login.scss';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import validator from 'validator'

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


const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    // const [redirect, setRedirect] = useState(false);

    // Validation start.
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setpasswordErr] = useState({});

    const formValidation = () => {
        const emailErr = {};
        const passwordErr = {};
        let isValid = true;

        if(email.trim().length < 5){
            emailErr.emailShort = "Email is too short";
            isValid = false;
        };

        // if(validator.isEmail(email)){
        //     emailErr.emailIsInvalid = "Email is invalid";
        //     isValid= false;
        // }

        if(password.trim().length < 5){
            passwordErr.passwordShort = "Password is too short";
            isValid = false;
        }

        setEmailErr(emailErr);
        setpasswordErr(passwordErr);
        return isValid;
    }
      

    //Validation End


    let history = useHistory();
    let url ='http://localhost:5001/api/login';
    // let url ='https://health-plants-of-uganda.herokuapp.com/api/plants';

const onFormSubmit = (e)=>{
    e.preventDefault();

    const isValid = formValidation();
    if(isValid){
        // send this data to your backend or some extenal api
        setemail("");
        setpassword("");
    }

    axios.post(url, {
        "email": email,
        "password": password
    })
    .then(response => {

                if (response.data.code === 200){

                    history.push('../userManagement');

                }else 
                history.push('../login');
                return;
        //     })
		// .then(response => {
		// 	return;
		}).catch(error => {
			return;
		})
}

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
                        <span>or use email for regirstration</span>
                        <Input type="text" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Button>Back</Button>
                    </form>
                </FormContainer>

                <FormContainer className=" signinContainer">
                    <form onSubmit={onFormSubmit} action="#">
                        <h1>Sign in</h1>
                        <SocialContainer className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </SocialContainer>

                            <span>or use your account</span>
                            <Input type="email" value={email} className="form-control" placeholder="Email" onChange={(event) => {
                            setemail(event.target.value)
                            }} />
                            {Object.keys(emailErr).map((key)=>{
                                return <div style={{color : "red"}}>{emailErr[key]}</div>
                            })}
                            <Input type="password" value={password} className="form-control" placeholder="Password" onChange={(event) => {
                            setpassword(event.target.value)
                            }} />
                            {Object.keys(passwordErr).map((key)=>{
                                return <div style={{color : "red"}}>{passwordErr[key]}</div>
                            })}
                            <a href="../UserManagement" className="here"> Forgot your passsword</a>
                            
                        <Button type="submit">Sign in</Button>
                    </form>
                </FormContainer>

                <div className="overlayContainer">
                    <div className="overlay">
                        <div className="overlayPanel overlayLeft">
                            <h1>Welcome Back</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <Button className="ghost" id="signIn" onClick={zlide}>Sign In</Button>
                        </div>

                        {/* <div className="overlayPanel overlayRight">
                            <h1>Hello, Friend</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <Button className="ghost" id="backbtn" onClick={slide}>Back</Button>
                        </div> */}
                    </div>
                 </div>            
            </Container>
        </FormBody>
        </>
    )
}
//sliding functions

export default Login
