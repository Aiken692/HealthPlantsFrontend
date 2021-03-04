import React from 'react'
import DRI from '../../images/tea1.jpg'
import styled from 'styled-components';

const Section = styled.section`
    color: #fff;
    width: 100%;
    min-height: 50vh;
    
`;

const SearchArea = styled.div`
position:absolute;
padding-left:20%;
width:100%;
height:50vh;
object-fit: cover;
background-size: cover;
background-image: url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/incremental_bacterial_and_viral_infections_video/650x350_incremental_bacterial_and_viral_infections_video.jpg);
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
    background: white;
}
::placeholder{
    color:white;    
}
`;

const searchAreaRem = () => {
    return (
        <Section>
                <SearchArea className="">
                    <Search type="text" placeholder="search"/>
                </SearchArea>
        </Section>
    )
}

export default searchAreaRem
