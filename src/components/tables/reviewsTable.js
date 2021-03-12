import React,{useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import * as faIcons from 'react-icons/fa'
import * as mdIcons from 'react-icons/md'

import '../styles/componentStyles.scss';
import { Button, Modal } from 'react-bootstrap';

// const TableHeader = styled.div`

// display:flex;
// justify-content:space-between;
// padding-top:2rem;
// padding-bottom:.5rem;
// padding-right:1rem;
// `;

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

function ReviewTable(){

    const [reviews, setReviews] = useState([]);
    // let url ='http://localhost:5001/api/reviews';
    let url ='https://health-plants-of-uganda.herokuapp.com/api/reviews';

    const getData = async () => {

        const response = await Axios.get(url);
        // console.log('response', response);
        setReviews(response.data);
    }

    useEffect (() => {
        getData()
    }, []);

    const renderBody = () => {
        return reviews && reviews.map(({review_id, review_date, user_full_name, remedy_name}) => {
            return (
                <tr key = {review_id}>
                    <td>{review_id}</td>
                    <td>{review_date}</td>
                    <td>{user_full_name}</td>
                    <td>{remedy_name}</td>
                    <td><button type="button" className="btn btn-sm"><faIcons.FaEdit /></button></td>
                    <td><button type="button" className="btn btn-sm"><mdIcons.MdDelete /></button></td>
                </tr>
            )
        })
    }

    
    const [showDetails , setShowDetails] = useState(false);
    // const handleShowDetails = () => setShowDetails(true);
    const handleCloseDetails = () => setShowDetails(false);

    const [showDel, setShowDel] = useState(false);
    // const handleShowDel = () => setShowDel(true);
    const handleCloseDel = () => setShowDel(false);
 
    return(
        <div className="Table main-content">
            
            <div>
                <Input type="text" placeholder="search"></Input>
                <table className="table tableStriped reviewsTable">
                <thead>
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
                    {renderBody()}
                    

                </tbody>
            </table>
            </div>

            <Modal size="lg" show={showDetails} onHide={handleCloseDetails} className="viewReviewModal">
                <div className="reviewContainer" >
                    <Modal.Header className="reviewHeader" closeButton>
                        <Modal.Title>
                            <span className="name">Emily Queen Tusiime</span>
                            <span className="reviewd">reviewed</span>
                            <span className="remedy">Ginger Tea</span>
                            <br />
                            <span className="date">11/11/2020</span>
                        </Modal.Title>
                    </Modal.Header>
                    <div className="review">
                        <p>Lorem Ipsum is simply dummy text 
                           of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled
                          it to make a type specimen book. 
                          It has survived not only five centuries, 
                          but also the leap into electronic typesetting,
                          remaining essentially unchanged. 
                          It was popularised in the 1960s with the release 
                          of Letraset sheets containing Lorem Ipsum passages, 
                          and more recently with desktop publishing software 
                          like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="reviewFooter">
                            <span>****** comments: 10</span>
                            <span><a href="#!">Similar posts</a></span>
                        </div>
                    </div>
                    <div className="reviewComments">
                        <div className="singleComment">
                            <div>
                                <span className="name">Emily Queen Tusiime</span>
                                <span className="remedy">*****</span>
                                <span className="date">11/11/2020</span>
                            </div>
                            <div>
                                <span className="comment"> This worked for me ..</span>
                            </div>
                            
                        </div>
                        <div className="singleComment">
                            <div>
                                <span className="name">Emily Queen Tusiime</span>
                                <span className="remedy">*****</span>
                                <span className="date">11/11/2020</span>
                            </div>
                            <div>
                                <span className="comment">
                                     i tried this with all ingredient and added grlic and it sorted out my cold in a day 
                                </span>
                            </div>
                        </div>
                        <a className="viewAll" href='#!'>view all comments</a>
                    </div>
                </div>
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

        </div>
    )
}

export default ReviewTable;


