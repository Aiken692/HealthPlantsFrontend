import React, { useState } from 'react'
import axios from 'axios';
import Sidebar from '../components/sideBar/sideBar';

function AddPlants() {



    const [plant_common_name, setplant_common_name] = useState("");
    const [plant_latin_name, setplant_latin_name] = useState("");
    const [plant_description, setplant_description] = useState("");
    const [file, setFile ] = useState(null);

const onFormSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('myImage', file);
    formData.append('plant_common_name', plant_common_name);
    formData.append('plant_latin_name', plant_latin_name);
    formData.append('plant_description', plant_description);
    console.log(file);
	const config = {
		headers: {
			'content-type' : 'multipart/form-data'
		}
	};

    axios.post('http://localhost:5001/api/plants', formData, config)
    .then(response => {
                console.log(response);
                return;
        //     })
		// .then(response => {
		// 	return;
		}).catch(error => {
			return;
		})
}

const onChange= (e) => {
	const uploadedImage = e.target.files[0];	
	setFile(uploadedImage);
 }
    return (
        
        <div className='addPlants'>
            <Sidebar /> 
                    <h1>Plants</h1>
                    <form onSubmit={onFormSubmit}>
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
                        
 		                <input type='file' name='myImage' onChange={onChange}/>
                        <button type='submit'>Submit</button>


                    </form>
                </div>
                // {/* {previewSource && (
                //     <img src={previewSource} alt="chosen" 
                //     style={{heighht: "300px"}}/>
                // )} */}
        //</div>
    );
}

export default AddPlants;
