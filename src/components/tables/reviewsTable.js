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

    const [showDetails , setShowDetails] = useState(false);
    const handleShowDetails = () => setShowDetails(true);
    const handleCloseDetails = () => setShowDetails(false);

    const [comment_body, setComment] =useState("")
    const [commentList, setCommentList] = useState([])

    const [showDel, setShowDel] = useState(false);
    // const handleShowDel = () => setShowDel(true);
    const handleCloseDel = () => setShowDel(false);

    // const getData = async () => {
    //     let url ='http://localhost:5000/api/reviews';

    //     const response = await Axios.get(url);
    //     // console.log('response', response);
    //     setReviews(response.data);
    // }

    const getData = () =>{
        Axios.get("http://localhost:5001/api/reviews").then((response) => {
          setReviews(response.data)
        })
      }
    
      const getComment = () =>{
        Axios.get("http://localhost:5001/api/comments").then((response) => {
          setCommentList(response.data)
        })
      }

      const deleteReview =() =>{
          Axios.delete("http://localhost:5001/api/reviews").then((response) =>{
              console.log("review deleted");
          })
      }

    useEffect (() => {
        getData()
        getComment()
    }, []);

    const renderBody = () => {
        return reviews && reviews.map(({review_id, review_date, user_full_name, remedy_name}) => {
            return (
                <tr key = {review_id}>
                    <td>{review_id}</td>
                    <td>{review_date}</td>
                    <td>{user_full_name}</td>
                    <td>{remedy_name}</td>
                    <td></td>
                    <td></td>
                    <td><button type="button" className="btn btn-sm" onClick={ handleShowDetails }><faIcons.FaEdit /></button></td>
                    <td><button type="button" className="btn btn-sm" onClick={ deleteReview }><mdIcons.MdDelete /></button></td>
                </tr>
            )
        })
    }

     
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
                {reviews.map((val, key) =>{})}
                <div className="reviewContainer" >
                    <Modal.Header className="reviewHeader" closeButton>
                        <Modal.Title>
                        {reviews.map((val, key) =>{
                            return(
                                <>
                                    <span className="name">{val.user_full_name}</span>
                                    <span className="reviewd">reviewed</span>
                                    <span className="remedy">{val.remedy_name}</span>
                                    <br />
                                    <span className="date">{val.review_date}</span>
                                </>
                            )
                        })}

                        </Modal.Title>
                    </Modal.Header>
                    <div className="review">
                        <p>{reviews.map((val, key) =>{
                            return(
                                <div> {val.review_description}</div>
                            )
                        })}</p>
                        {/* <div className="reviewFooter">
                            <span>****** comments: 10</span>
                            <span><a href="#!">Similar posts</a></span>
                        </div> */}
                    </div>
                    <div className="reviewComments">

                        {commentList.map((val, key) =>{
                            return (
                                <ul>
                                    <li className="singleComment">
                                        <div>M</div>
                                        {val.comment_body}
                                    </li>
                                </ul>
                            )
                        })}

                        {/* <a className="viewAll" href='#!'>view all comments</a> */}
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


