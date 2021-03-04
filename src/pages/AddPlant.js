import React, { useState } from 'react'
import Axios from 'axios';
import Sidebar from '../components/Sidebar/Sidebar';

function AddPlants() {



    const [plant_common_name, setplant_common_name] = useState("");
    const [plant_latin_name, setplant_latin_name] = useState("");
    const [plant_description, setplant_description] = useState("");
    // const displayInfo = () => {
    //     console.log(commonName + latinName + description);
    // }

    const createPlant = () =>{
        Axios.post("http://localhost:5000/api/plants", {
            plant_common_name : plant_common_name,
            plant_latin_name : plant_latin_name,
            plant_description : plant_description
        }).then(() => {
            console.log("success");
        })
    };
    return (
        <div className='addPlants'>
            <Sidebar /> 
                <div className="addForm">
                    <h1>Plants</h1>
                    <label>Common Name:</label>
                    <input type = "text" onChange={(event) => {
                        setplant_common_name(event.target.value)
                    }} />
                    <label>Latin Name:</label>
                    <input type = "text" onChange={(event) => {
                        setplant_latin_name(event.target.value)
                    }} />
                    <label>Description:</label>
                    <input type = "text" onChange={(event) => {
                        setplant_description(event.target.value)
                    }} />
                    <label>Image:</label>
                    <input type = "image" alt="Upload Image" />
                    <button onClick={createPlant}>Submit</button>

                </div>
        </div>
    )
}

export default AddPlants
