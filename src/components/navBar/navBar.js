import React, {useState, useEffect} from 'react'
import styled, {css} from 'styled-components/macro';
import './navBar.css';
// import { Link } from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar'
// import ToolBar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import * as faIcons from 'react-icons/fa'

//  BrowserRouter as Router, Switch, Route,
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import {  AiOutlineBars } from "react-icons/ai";
import {IoPersonCircleOutline} from "react-icons/io5";


const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;    
    height: 100%;
    padding:1rem;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color:#CAFFCA;
        text-decoration:none;
    }
`;

const Logo = styled(Link)`
    color: #fff;
    font-style: italic;
`


const MenuBars = styled(AiOutlineBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-size: contain;
        height: 30px;
        width: 40px;
        cursor: pointer;
        position: absoulte;
        top: 0;
        right: 0;
        transform: translate(-50%, 10%);
    }
`;

const NavMenu = styled.div`
     display: flex;

     @media screen and (max-width: 768px) {
         display: none;
     }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
    
`;

const Navbar = ({toggle}) => {

    const [navbar, setNavbar] = useState(false);
    const Location = useLocation();


    const changeBackground = () => {
        if (window.pageYOffset >= 60){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', changeBackground);
        };

        watchScroll();

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    let style ={
        backgroundColor: navbar || Location.pathname !=='/' ? '#007000' : 'transparent', transition: '0.4s'
    };




    return(
        <Nav style={style}>
            <Logo>Health Plants of Uganda</Logo>
            <MenuBars onClick={toggle}/> 
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
                <a href="/login" style={{color: 'white'}}>
                 <IoPersonCircleOutline/>
                </a>
                
            </NavMenu>
        </Nav>
    )
};

export default Navbar;