import React, {Component} from 'react';
import Axios from 'axios';
import Lemon from '/home/biko23/Documents/workspace/healthPlantsofUganda/frontend/health-plants-of-uganda/src/Images/lemon.jpg';

import './card.css';

class Card extends Component {
    constructor(props){
        super(props);

        this.state = {
            plantDetails :{
            pp: Lemon,
            common_name: "",
            latin_name: "",
            detail: "More..."
        }
        }
        
    }
    plantView(){

        // const viewPlants = () => {
            Axios.get("http://localhost:5000/api/plants").then((response) => {
                this.setState({plantDetails: response.data});

                return;
                // console.log(response);
            });
        //}
        return this.state.plantDetails.map ( (plant, index) => {
            const {plant_id, plant_common_name, plant_latin_name} = plant
            return (
                <tr key={plant_id}>
                    <td>{plant_id}</td>
                    <td>{plant_common_name}</td>
                    <td>{plant_latin_name}</td>
                    <td></td>
                    <td></td>
                    
                </tr>
    
            )
        }
        )
    }

    render(){
        return(
            <div className="card">
                {this.plantView()};
                <img src= {this.state.pp} alt=""/>
                <label>common_name: {this.state.common_name}</label>
                <label>latin_name: {this.state.latin_name}</label>
                <a href={this.state.detail}>{this.state.detail}</a>
            </div>
        );
    };
};

export default Card;