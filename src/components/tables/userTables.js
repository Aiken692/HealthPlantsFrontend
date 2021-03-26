import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import '../styles/componentStyles.scss';
import * as faIcons from 'react-icons/fa'
import * as mdIcons from 'react-icons/md'
import { Button, Modal } from 'react-bootstrap';

const TableHeader = styled.div`

display:flex;
justify-content:space-between;
padding-top:2rem;
padding-bottom:.5rem;
padding-right:1rem;
`;
const Input = styled.input`
padding:.5rem;
border-radius:20px;
width:60%;
padding-left:1rem;
border:none;
margin-top:1rem;
background-color:#CAFFCA;
&:focus{
    outline:none;
    /* border:none; */
}
`;

function UserTable( props ){

    const [searchTerm, setSearchTerm] = useState("")

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const [showDetail, setShowDetail] = useState(false);
    const handleShowDetail = () => setShowDetail(true);
    const handleCloseDetail = () => setShowDetail(false);

    const [showEdit, setShowEdit] = useState(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleCloseEdit = () => setShowEdit(false);

    const [showDel, setShowDel] = useState(false);
    const handleShowDel = () => setShowDel(true);
    const handleCloseDel = () => setShowDel(false);



    const [users, setUsers] = useState([]);
    const [user_full_name, setuser_full_name] = useState("");
    const [email, setemail] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [password, setpassword] = useState("");
    const [file, setFile ] = useState(null);



    // let url ='http://localhost:5001/api/users';
    let url ='https://health-plants-of-uganda.herokuapp.com/api/users';
    const getData = async () => {

        const response = await Axios.get(url);
        // console.log('response', response);
        setUsers(response.data);
    }



    useEffect (() => {
        getData()
    }, []);



    const renderHeader = () => {
        let headerElement = ['id', 'full_name', 'email', 'phone_number'];
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()} </th>
        })
    }



    const renderBody = () => {
        return users && users.filter((val) =>{
            if(searchTerm == ""){
                return val
            }else if(val.user_full_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map(({user_id, user_full_name, email, phone_number}) => {
            return (
                <tr key = {user_id}>
                    <td>{user_id}</td>
                    <td>{user_full_name}</td>
                    <td>{email}</td>
                    <td>{phone_number}</td>
                    <td><Button variant="primary" onClick={handleShowEdit}><faIcons.FaEdit /></Button></td>
                    <td><Button variant="primary" onClick={handleShowDel}><mdIcons.MdDeleteForever /></Button></td>
                </tr>
            )
        })
    }



    const onFormSubmit = (e)=>{
        console.log("Hello there.....")
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('myImage', file);
        formData.append('user_full_name', user_full_name);
        formData.append('email', email);
        formData.append('phone_number', phone_number);
        formData.append('password', password);
        console.log(file);
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        };
    
        Axios.post( 'http://localhost:5001/api/users', formData, config)
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
    



    const {title} = props
    return (

        <div className="Table main-content">

            <input type="checkbox" id="user-toggler"></input>

                <label for="user-toggler" className="switch" > 
                    <span className="slider"></span>
                </label>

            <div className="clientTable">

                <Input type="text" placeholder="search" onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}></Input>
                <TableHeader>                
                    <h3>Client</h3>
                </TableHeader>
                <table className="table tableStriped table1">

                    <thead data-toggle='modal' data-target='#details'>                   
                    <tr>{renderHeader()}</tr>  
                            <th></th>                  

                    </thead>

                    <tbody>
                        {renderBody()}
                    </tbody>

                </table>
            </div>

            <div className="AdminTable">

                <Input type="text" placeholder="search" onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}></Input>

                <TableHeader>                    
                    <h3>Admin</h3>
                    <Button variant="primary" onClick={handleShowAdd}>Add</Button>
                </TableHeader>

                <table className="table tableStriped table1">
                    <thead data-toggle='modal' data-target='#details'>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>

             
            </div>


            <Modal show={showAdd} onHide={handleCloseAdd} className="addUserModal">
                <Modal.Header closeButton className="modalHeader">
                    <Modal.Title>Add New Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={onFormSubmit} class="row g-3">
            
                    <div class="col-12">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input type="text"onChange={(event) => {
                            setuser_full_name(event.target.value)
                        }} class="form-control" id="fullName" placeholder=""/>
                    </div>
                    <div class="col-12">
                        <label for="LastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="LastName" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" onChange={(event) => {
                            setemail(event.target.value)
                        }} class="form-control" id="email" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="phone_number" class="form-label">Phone</label>
                        <input type="tel" onChange={(event) => {
                            setphone_number(event.target.value)
                        }} class="form-control" id="phone_number" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="password" class="form-label">password</label>
                        <input type="password" onChange={(event) => {
                            setpassword(event.target.value)
                        }} class="form-control" id="password" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="myImage" class="form-label">Image</label>
                        <input type='file' name='myImage' onChange={onChange}/>
                    </div>
                 
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="add" type="submit">
                            Add
                        </Button>
                        <Button variant="primary" onClick={handleCloseAdd} className="cancel">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </form>
                </Modal.Body>
                
            </Modal>

            <Modal show={showEdit} onHide={handleCloseEdit} className="editUserModal">
                <Modal.Header closeButton className="modalHeader">
                    <Modal.Title>Edit Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form class="row g-3">
            
                    <div class="col-12">
                        <label for="FirstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="FirstName" placeholder=""/>
                    </div>
                    <div class="col-12">
                        <label for="LastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="LastName" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" placeholder="" />
                    </div>
                 
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="add" type="submit">
                            Edit
                        </Button>
                        <Button variant="primary" onClick={handleCloseEdit} className="cancel">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </form>
                </Modal.Body>
                
            </Modal>

            <Modal show={showDel} onHide={handleCloseDel} className="delUserModal">
                <Modal.Header closeButton className="modalHeader" />
                <Modal.Body>
                <form class="row g-3">            
                    <div class="col-12">
                       <h4>Are you sure u want to Delete this user?</h4>
                    </div>                    
                 
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="add" type="submit">
                            Delete
                        </Button>
                        <Button variant="primary" onClick={handleCloseDel} className="cancel">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </form>
                </Modal.Body>                
            </Modal>

            <Modal size="lg" show={showDetail} onHide={handleCloseDetail} className="viewReviewModal userDetail">
                <div className="userDetails" >
                    <Modal.Header className="reviewHeader" closeButton>
                        <Modal.Title>
                            <span className="name">Emily Tusiime Queen</span>
                        </Modal.Title>
                    </Modal.Header>
                    <table className="table table-hover tableStriped">
                        <thead data-toggle='modal'>
                            <tr>
                                <th>Reviews <span class="badge badge-pill badge-danger">1</span></th>
                                <th>Comments <span class="badge badge-pill badge-danger">0</span></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>  
                                <th></th>  
                                <th></th>                
                            </tr>
                        </thead>
                        <thead data-toggle='modal'>
                            <tr>
                                <th>ID</th>
                                <th>Date posted</th>
                                <th>Author</th>
                                <th>Remedy</th>
                                <th>Plant-variants</th>  
                                <th>Score</th>
                                <th></th>
                                <th></th>                  
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>001</th>
                                <td>11-11-202</td>
                                <td>Em queen</td>
                                <td>Giner Tea</td>
                                <td>Ginger root, Garlic..</td>
                                <td>1</td>
                                <td><Button variant ="primary" onClick={ handleShowDetail}> C </Button></td>
                                <td><Button variant="primary" onClick={handleShowDel}> D</Button></td>
                            </tr>
                            <tr>
                                <th>001</th>
                                <td>11-11-202</td>
                                <td>Em queen</td>
                                <td>Giner Tea</td>
                                <td>Ginger root, Garlic..</td>
                                <td>1</td>
                                <td><Button variant ="primary" onClick={ handleShowDetail}> C </Button></td>
                                <td><Button variant="primary" onClick={handleShowDel}> D</Button></td>
                            </tr>
                            <tr>
                                <th>001</th>
                                <td>11-11-202</td>
                                <td>Em queen</td>
                                <td>Giner Tea</td>
                                <td>Ginger root, Garlic..</td>
                                <td>1</td>
                                <td><Button variant ="primary" onClick={ handleShowDetail}> C </Button></td>
                                <td><Button variant="primary" onClick={handleShowDel}> D</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>                    
            </Modal>

        </div>
    )

}

export default UserTable;