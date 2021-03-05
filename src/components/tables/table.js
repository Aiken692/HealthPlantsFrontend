import React, { useState} from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import * as faIcons from 'react-icons/fa'
import * as mdIcons from 'react-icons/md'

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
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    const [plants, setPlants] = useState([]);

    const getData = async () => {
        let url ='http://localhost:5001/api/plants';

        const response = await Axios.get(url);
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

    const renderBody = () => {
        return plants && plants.map(({plant_id, plant_common_name, plant_latin_name}) => {
            return (
                <tr key = {plant_id}>
                    <td>{plant_id}</td>
                    <td>{plant_common_name}</td>
                    <td>{plant_latin_name}</td>
                    <td><button type="button" className="btn btn-sm"><faIcons.FaEdit /></button></td>
                    <td><button type="button" className="btn btn-sm"><mdIcons.MdDelete /></button></td>
                </tr>
            )
        })
    }
    return (
        <div className="Table main-content">
            <Input type="text" placeholder="search"></Input>
            <table className="table tableStriped table1">
                <thead data-toggle='modal' data-target='#details'>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )

}

export default Table;
