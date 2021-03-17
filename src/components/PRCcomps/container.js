import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Jamie from "../../images/Jamie1.JPG";
import { Link } from 'react-router-dom';

// Importing the cad component.
import { Card } from "react-bootstrap"; 

const Section = styled.section`
    width: 100%;
    min-height: 50vh;

    // working on small changes
    display: flex;
    
`;

const ContainerOne = styled.div`
    width:100%;
    padding:5rem;
    margin: auto;
`;


function Container(props){

    const [plants, setPlants] = useState([]);

    



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

        return plants && plants.map(({plant_id, plant_common_name, plant_latin_name, plant_image, plant_description}) => {

            console.log(plant_image)
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
                                <p class="card-title">Emily Queen Tusiime</p>
                                <p>Lorem Ipsum is simply dummy text 
                                                    of the printing and typesetting industry.
                                                   
                                                     </p>
                                    
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
            <ContainerOne className="row">
                <div className="col-md-4">
                    <h1>Top Reviews</h1>

                    <hr style={{border: '2px solid black'}} />
                    {renderBodyTR()}
                    
                        
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

