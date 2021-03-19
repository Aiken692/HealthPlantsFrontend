import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import fruit from '../../images/fruit.jpg'
import '../styles/conditions.scss';
import Axios from 'axios';

import Carousel from 'react-elastic-carousel';
import {Card} from 'react-bootstrap'


const Section = styled.section`
    width: 100%;
    min-height: 50vh;
    
`;

const Container = styled.div`
    width:100%;
    padding:5rem;
`;


function ConditionsContainer(props){

    


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



    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 550, itemsToShow: 4},
        {width: 760, itemsToShow: 5}, 
        {width: 1200, itemsToShow: 7}
    ];



    const renderBody = () => {
        return plants && plants.map(({plant_id, plant_common_name, plant_latin_name, plant_image, plant_description}) => {
            
            return (
               

                   
                       
                    <div className="card ml-2" style={{width: '100%'}}> 
                    
                         <img src={plant_image} className="card-img-top" alt="image goes here" />
                        <div className="card-footer">
                            <a href="/cardicadetail" >view</a>
                        </div> 
                   
                 </div> 
                
                
                
            )
        })
    }


    const renderBodyTr = () => {
        return plants && plants.map(({plant_id, plant_common_name, plant_latin_name, plant_image, plant_description}) => {
            
            return (
               

                   
                       
                <div className="card ml-2" style={{width:'100%'}}>
                <img src={fruit} className="card-img-top" alt="image goes here" />
                <div className="card-footer">
                    <a href="/jointdetail" >view</a>
                </div>
                </div>
                
                
                
            )
        })
    }

    return(
        <Section>
            <Container className="row">
                <div className="col-md-4">
                    <h1>Top Reviews</h1>

                    <hr style={{border: '2px solid black'}} />
                    <div class="card mb-3" style={{maxWidth: '540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={fruit} class="card-img-top" alt="img here" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mb-3" style={{maxWidth: '540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={fruit} class="card-img-top" alt="img here" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mb-3" style={{maxWidth: '540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={fruit} class="card-img-top" alt="img here" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3" style={{maxWidth: '540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={fruit} class="card-img-top" alt="img here" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <h1>Conditions</h1>
                    <hr style={{border: '2px solid #fff'}} />
                    <div class="row jointCadiac">
                        
                        <div className="col-md-12">
                            <div className="card mb-3">
                                <img src="https://dimensionsofdentalhygiene.com/wp-content/uploads/2017/10/1017_managing.jpg" className="card-img-top" alt="image goes here" />
                                <div className="row">
                                    <h5 className="card-title col-md-12"> Cardiac Conditions</h5>


                                    

                                   
                                     
                                    <Carousel breakPoints={breakPoints}>
                                        {renderBody()}
                                    </Carousel>

                                    
                                    
                                    
                                    
                                </div>
                                
                            </div>    
                                                    
                        </div>


                        


                        
                        

                        <div className="col-md-12">
                            <div className="card mb-3">
                                <img src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/bones-and-joints/shoulder-pain-hero.ashx?h=500&la=en&mh=500&mw=1300&w=1297&hash=FC4B80DFE79904E055BFE6531B584E2F360A0EB5" className="card-img-top" alt="image goes here" />
                                <div className="card-body row">
                                <h5 className="card-title col-md-12"> Joint Conditions</h5>



                                    <Carousel breakPoints={breakPoints}>
                                        {renderBodyTr()}
                                    </Carousel>

                                    
                                    <a href="/joint" className="viewAll">view all</a>
                                </div>
                            </div>
                        </div>
                        

                    </div>   
                </div>
                
            </Container>
        </Section>
    )
}

export default ConditionsContainer;
