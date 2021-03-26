import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Jamie from "../../images/Jamie1.JPG";
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars'

// Importing the cad component.
import Card  from "react-bootstrap/Card"; 

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


function Container(props){

    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")  



    // let url ='http://localhost:5001/api/plants';
    let url ='https://health-plants-of-uganda.herokuapp.com/api/plants';
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
            }else if(val.plant_common_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map(({plant_id, plant_common_name, plant_latin_name, plant_image, plant_description}) => {

            // console.log(plant_image)
            return (

                <div>
                        
                    
                            <Card style={{ width: '17rem',marginBottom: '5%', height: '18rem'}} className="plantCard" >
                                <Link to={`/plant/${plant_id}`}>
                                <Card.Img variant="top" src="holder.js/100px180"  src={plant_image} alt="img here"/>
                                
                                </Link>
                                
                                <Card.Body>
                                    <Card.Title>{plant_common_name}</Card.Title>
                                    
                                    
                                    <Link to={`/plant/${plant_id}`}>Read More...</Link>
                                    
                                    
                                </Card.Body>
                            </Card>
                    
                            
                </div>


            )
        })
    }

// console.log(plants)

    const renderBodyTR = () => {
        return plants && plants.map(({plant_id, plant_common_name, plant_latin_name, plant_image, plant_description}) => {
            return (
                <div class="card mb-4" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4" >
                            <img src={plant_image} class="card-img-top" alt="img here" />
                            
                            
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-title">{plant_common_name}</p>
                                <Link to={`/plant/${plant_id}`}>Read More...</Link>                        
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

{/* Cards displaying items */}
                <div className="col-md-8">
                    <h1>{pageName}</h1>

                    <hr style={{border: '2px solid black'}} />
                    


                    <div class="row row-cols-1 row-cols-md-3 g-4">


                        {/* {cardInfo.map(renderCard)} */}

                        
                        {renderBody()}
                        

                       
                    </div>
                </div>

            </ContainerOne>
        </Section>
    )
}

export default Container;

