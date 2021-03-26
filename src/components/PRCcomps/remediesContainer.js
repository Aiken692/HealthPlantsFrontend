import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Jamie from "../../images/Jamie1.JPG";
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars'


// Importing the cad component.
import { Card } from "react-bootstrap"; 

const Section = styled.section`
    width: 100%;
    min-height: 100vh;

    // working on small changes
    display: flex;
    flex-direction: column;
    
`;

const ContainerOne = styled.div`
    width:100%;
    padding:5rem;
    margin: auto;
`;

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
background-image: url(https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGhlcmJhbCUyMG1lZGljaW5lfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60);
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


function Container(props){

    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("") 

    



    let url ='http://localhost:5001/api/remedies';
    // let url ='https://health-plants-of-uganda.herokuapp.com/api/remedies';
    const getData = async () => {

        const response = await Axios.get(url);
        // console.log('response', response);
        setPlants(response.data);
    }



    useEffect (() => {
        getData()
    }, []);


    const renderBody = () => {

        return plants && plants.filter((val) =>{
            if(searchTerm == ""){
                return val
            }else if(val.remedy_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map(({remedy_id, remedy_name, remedy_preparation, remedy_image}) => {

            return (

                <div>
                        
                    
                            <Card style={{ width: '17rem',marginBottom: '5%', height: '18rem'}} className="plantCard" >
                                <Link to={`/remedy/${remedy_id}`}>
                                <Card.Img variant="top" src="holder.js/100px180" src={remedy_image} alt="img here"/>
                                </Link>
                                
                                <Card.Body>
                                    <Card.Title>{remedy_name}</Card.Title>
                                    
                                    <Link to={`/remedy/${remedy_id}`}>Read More...</Link>
                                    
                                    
                                </Card.Body>
                            </Card>
                    
                            
                </div>


            )
        })
    }


console.log(plants)

    const renderBodyTR = () => {
        return plants && plants.map(({remedy_id, remedy_name, remedy_preparation, remedy_image}) => {
            return (
                <div class="card mb-3" style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-6">
                    <img src={remedy_image} class="card-img-top" alt="img here" />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <p class="card-text">{remedy_name}</p>    
                            <Link to={`/remedy/${remedy_id}`}>Read More...</Link>                    
                        </div>
                    </div>
                </div>
            </div>

            )
        })
    }

    

    const {pageName} = props
    return(
        <Section>

            <SearchSection>
                <SearchArea className="">
                    <Search type="text" placeholder="search" onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}/>
                </SearchArea>
            </SearchSection>

            <ContainerOne className="row">
                <div className="col-md-4">
                    <h1>Top Reviews</h1>

                    <hr style={{border: '2px solid black'}} />

                    <Scrollbars style={{ width: '100%', height: '100%'}}>
                    {renderBodyTR()}
                    </Scrollbars>
                    
                    
                        
                </div>


                <div className="col-md-8">
                    <h1>{pageName}</h1>

                    <hr style={{border: '2px solid black'}} />
                    


                    <div class="row row-cols-1 row-cols-md-3 g-4">


                        
                        {renderBody()}
                        

                       
                    </div>
                </div>
            </ContainerOne>
        </Section>
    )
}

export default Container;

