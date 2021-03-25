import React from 'react';
import styled from 'styled-components';

const SearchSection = styled.section`
    color: #fff;
    width: 100%;
    min-height: 50vh;
    
`;

const SearchArea = styled.div`
position:absolute;
padding-left:20%;
width:100%;
height:50vh;
background-size: cover;
background-image: url('https://images.unsplash.com/photo-1512238701577-f182d9ef8af7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80');
/* background-color:black; */

`;

const Search = styled.input`
border-radius:20px;
font-size: 20px;
background: white;
width:70%;
border: 1px solid #fff;
margin-top: 180px;
position:relative;
margin-left:0;
margin-right:0;
padding:.3rem;
padding-left:1rem;
background:transparent;
&:focus{
    outline:none;
    background:white;
}
::placeholder{
    color:white;    
}
`;

function searchArea(){
    return(
        <SearchSection>
            <SearchArea className="">
                <Search type="text" placeholder="search"/>
            </SearchArea>
        </SearchSection>
    )
}

export default searchArea;