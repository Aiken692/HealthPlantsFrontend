import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import fruit from '../../images/fruit.jpg';
import Axios from 'axios';

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

    // Walters Mock array to loop through.
    const cardInfo = [
        {image: "https://images.unsplash.com/photo-1544437353-90c5b0daf035?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG9yYW5nZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title: "Lemon", text: "Lemons are good for cough"},
        {image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title: "Mango", text: "Mangoes very nice test"},
        {image: "https://images.unsplash.com/photo-1612215047504-a6c07dbe4f7f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YWNhZG98ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title: "Avacado", text: "Tests good on food"},
        {image: "https://images.unsplash.com/photo-1590860778102-9f6efbc92495?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJhbmFuYXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title: "Banana", text: "Best yello fruit"},
        {image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title: "Water Melon", text: "Adds water in the body"},
        {image: "https://images.unsplash.com/photo-1592559768223-21be22564b28?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmVhcHBsZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title: "Pineapple", text: "I love the test of pineapple"},
        {image: "https://images.unsplash.com/photo-1533893662125-43c54ffa3b41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGZydWl0c3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title: "Apple", text: "Very delicious"}, 
        {image: "https://images.unsplash.com/photo-1544437353-90c5b0daf035?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fG9yYW5nZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title: "Lemon", text: "Lemons are good for cough"},
    ];

    //Walter's card render function

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                    {card.text}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        )
    }




    const getData = async () => {
        let url ='http://localhost:5000/api/plants';

        const response = await Axios.get(url);
        // console.log('response', response);
        setPlants(response.data);
    }



    useEffect (() => {
        getData()
    }, []);


    const renderBody = () => {
        return plants && plants.map(({plant_id, plant_common_name, plant_latin_name, plant_image, plant_description}) => {
            return (

            <div>
                    

                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="holder.js/100px180" src={plant_image} alt="img here"/>
                            <Card.Body>
                                <Card.Title>{plant_common_name}</Card.Title>
                                <h5 class="card-title">{plant_latin_name}</h5>
                                <Card.Text>
                                {plant_description}
                                </Card.Text>
                                <p class="card-text"><small class="text-muted"><a href="#">Read more...</a></small></p>
                                
                            </Card.Body>
                        </Card>
            </div>


            )
        })
    }


    const renderBodyTR = () => {
        return plants && plants.map(({plant_id, plant_common_name, plant_latin_name, plant_image, plant_description}) => {
            return (
                <div class="card mb-3" style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={plant_image} class="card-img-top" alt="img here" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{plant_id}</h5>
                            <h5 class="card-title">{plant_common_name}</h5>
                            <h5 class="card-title">{plant_latin_name}</h5>
                            <p class="card-text">{plant_description}</p>
                            <p class="card-text"><small class="text-muted"><a href="#">Read more...</a></small></p>
                        </div>
                    </div>
                </div>
            </div>

            )
        })
    }

    // const renderBody = () => {
    //     return plants && plants.map(({plant_id, plant_common_name, plant_latin_name, plant_image, plant_description}) => {
    //         return (

    //         <div class="row row-cols-1 row-cols-md-3 g-4">
    //                     <div class="col">
    //                         <div class="card">
    //                         <img src={plant_image} class="card-img-top" alt="img here" />
    //                             <div class="card-body">
    //                                 <h5 class="card-title">{plant_common_name}</h5>
    //                                 <h5 class="card-title">{plant_latin_name}</h5>
    //                                 <p class="card-text">{plant_description}</p>
    //                                 <p class="card-text"><small class="text-muted"><a href="#">Read more...</a></small></p>
    //                             </div>
    //                         </div>
    //                     </div>
    //         </div>


    //         )
    //     })
    // }

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


                        {cardInfo.map(renderCard)}
                        {renderBody()}
                        

                       
                    </div>
                </div>

            </ContainerOne>
        </Section>
    )
}

export default Container;

