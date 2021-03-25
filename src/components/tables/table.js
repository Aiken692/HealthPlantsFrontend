import React, { useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import * as faIcons from 'react-icons/fa'
import * as mdIcons from 'react-icons/md'
import { Button, Modal } from 'react-bootstrap';

const Input = styled.input`
padding:.5rem;
border-radius:20px;
width:60%;
padding-left:2rem;
border:none;
margin-top:1rem;
background-color:#CAFFCA;
&:focus{
    outline:none;
    /* border:none; */
}
`;

function Table(){

    const [searchTerm, setSearchTerm] = useState("")

    const [showAddPlant, setShowAddPlant] = useState(false);
    const handleCloseAddPlant = () => setShowAddPlant(false);
    const handleShowAddPlant = () => setShowAddPlant(true);

    const [plant_common_name, setplant_common_name] = useState("");
    const [plant_latin_name, setplant_latin_name] = useState("");
    const [plant_description, setplant_description] = useState("");
    const [file, setFile ] = useState(null);

//     const [isOpen, setIsOpen] = useState(false);
 
//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   }

    const [plants, setPlants] = useState([]);

    const[selectedPlant, setselectedPlant] = useState({});

    let url ='https://health-plants-of-uganda.herokuapp.com/api/plants';
    const getData = async () => {
        // let url ='http://localhost:5001/api/plants';
        const response = await axios.get(url);
        // console.log('response', response);
        setPlants(response.data);
    }

    useEffect (() => {
        getData()
    }, []);


    const renderHeader = () => {
        let headerElement = ['id', 'plant_common_name', 'plant_latin_name'];
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()} </th>
        })
    }

    const editPlant = () => {
        
        let b = document.getElementById("plant_id");
        console.log(b);
    }

    const renderBody = () => {
        return plants && plants.filter((val) =>{
            if(searchTerm == ""){
                return val
            }else if(val.plant_common_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map(({plant_id, plant_common_name, plant_latin_name}) => {
            console.log(plants);
            return (
                <tr key = {plant_id}>
                    <td id="plant_id">{plant_id}</td>
                    <td>{plant_common_name}</td>
                    <td>{plant_latin_name}</td>
                    <td><button onClick={editPlant} type="button" className="btn btn-sm" >
                        <faIcons.FaEdit /></button></td>
                    <td><button type="button" className="btn btn-sm"><mdIcons.MdDelete /></button></td>
                </tr>
            )
        })
    }

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
    
        axios.post(url, formData, config)
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
        <>
        <div className="Table main-content">
            <Input type="text" placeholder="search" onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}></Input>
            {/* <Button className="ml-4" onclick={handleShowAddPlant}>Add</Button> */}
            <Button variant="primary" onClick={handleShowAddPlant} className="ml-4">Add</Button>
            <table className="table tableStriped table1">
                <thead data-toggle='modal' data-target='#details'>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>

        <Modal show={showAddPlant} onHide={handleCloseAddPlant} className="addUserModal">
            <Modal.Header closeButton className="modalHeader">
                <Modal.Title>Add New plant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={onFormSubmit} class="row g-3">

                    <div class="col-12">
                        <label for="commonName" class="form-label">Common  Name</label>
                        <input type="text"onChange={(event) => {
                            setplant_common_name(event.target.value)
                        }} class="form-control" id="commonName" placeholder=""/>
                    </div>
                    <div class="col-12">
                        <label for="LatinName" class="form-label">Latin Name</label>
                        <input type="text" class="form-control" id="LatinName" placeholder="" onChange={(event) =>{
                            setplant_latin_name(event.target.value)
                        }}/>
                    </div>
                    <div class="col-12">
                        <label for="plantDescription" class="form-label">Description</label>
                        <input type="test" onChange={(event) => {
                            setplant_description(event.target.value)
                        }} class="form-control" id="plantDescription" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="myImage" class="form-label">Image:</label>
                        <input type='file' name='myImage' onChange={onChange}/>
                    </div>
                
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="add" type="submit">
                            Add
                        </Button>
                        <Button variant="primary" onClick={handleCloseAddPlant} className="cancel">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>

    </Modal>
    
    </>
    )

}

export default Table;
