import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import '../../styles/componentStyles.scss';
import './details.scss';

const Section = styled.section`
    width: 100%;
    min-height: 50vh;
    h1, h2, h3, h4, h5 {
        color:#007000;
    }
    hr{
        width:100%;
    }
    
`;

const Container = styled.div`
    width:100%;
    padding:5rem;

    /* img{
        border-radius:20px;
    } */
`;

const WriteReview = styled.button`
    border-radius:25px;
    background-color:#CAFFCA;
    color:#007000;
    border:none;
    padding:1rem;
    width:90%;
    &:focus{
        outline:none;
        border:none;
    }
    
`;
const CardBody = styled.div`
padding:0;
height: 10rem;
`;
const CardFooter = styled.div`
    padding: 0;
    text-align: center;
    color: #007000;
    background: #CAFFCA;
    /* height: 10px; */
    a{
      margin-top: 0;
      padding-top:0 ;
      color: #007000;
    }
`;
function details(props){


    const {pageName} = props

    const [comment, setComment] =useState("")
    const [commentList, setCommentList] = useState([])

    const [review_body , setReviewBody] = useState(false);
    const [reviewList, setReviewList] = useState([])
    const handleWriteReview = () => setReviewBody(true);
    const handleCloseWriteReview = () => setReviewBody(false);
    
    const handleChangeComment = (event) =>{
        setComment(event.target.value)
    }
    
    const addComment = () =>{
        Axios.post("http://localhost:5001/api/comments", {
          comment:comment
        }).then(() =>{
          setCommentList([
            ...commentList, {comment:comment}
          ])
        })
    }

    const getComment = () =>{
        Axios.get("http://localhost:5001/api/comments").then((response) => {
          setCommentList(response.data)
        })
      }
    
      const addReview = () =>{
        axios.post("http://localhost:5001/api/reviews", {
            review_body:review_body
        }).then(() =>{
            setReviewList([
            ...reviewList, {review_body:review_body}
            ])
        })
    }

    const getReview = () =>{
        axios.get("http://localhost:5001/api/reviews").then((response) => {
          setReviewList(response.data)
        })
      }

    useEffect (()=>{
        getComment()
        getReview()
    },[])

    // const renderComment = () => {
    //     return comment && comment.map(({comment_body}) =>{
    //         return(

    //         )
    //     })
    // }
    return(
        <>
        <Section>
            <Container className="row">
                <div className="col-md-4">
                    <div className="img">
                        <img src="https://images.unsplash.com/photo-1568595502714-5a8aa68c5fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt="image here" />
                    </div>
                    
                    <h4> lemon</h4>
                    <h4>citrus lemon</h4>
                    <WriteReview onClick={ handleWriteReview } >write a Review</WriteReview>
                    <h4>plant varianst</h4>
                    <hr />
                    <div className="row">
                        <div class="col-md-6 card-single">
                            <CardBody class="card-body">
                                <img src="https://images.unsplash.com/photo-1568595502714-5a8aa68c5fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" width="100%" height="100%" alt="image here" />
                            </CardBody>
                            <CardFooter class="card-footer">
                                <a href="">view all</a>
                            </CardFooter>
                        </div>
                        <div class="col-md-6 card-single">
                            <CardBody class="card-body">
                                <img src="https://images.unsplash.com/photo-1568595502714-5a8aa68c5fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" width="100%" height="100%" alt="image here" />
                            </CardBody>
                            <CardFooter class="card-footer">
                                <a href="">view all</a>
                            </CardFooter>
                        </div>
                    </div>
                    <h4>remedies</h4>
                    <hr />
                    <div className="row">
                        <div class="col-md-6 card-single">
                            <CardBody class="card-body">
                                <img src="https://images.unsplash.com/photo-1568595502714-5a8aa68c5fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" width="100%" height="100%" alt="image here" />
                            </CardBody>
                            <CardFooter class="card-footer">
                                <a href="">view all</a>
                            </CardFooter>
                        </div>
                        <div class="col-md-6 card-single">
                            <CardBody class="card-body">
                                <img src="https://images.unsplash.com/photo-1568595502714-5a8aa68c5fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" width="100%" height="100%" alt="image here" />
                            </CardBody>
                            <CardFooter class="card-footer">
                                <a href="">view all</a>
                            </CardFooter>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    
                    <div className="description">
                    <h3>Descrition</h3>
                        <p>The lemon, Citrus limon, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.
                            The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary
                            and cleaning uses.[2] The pulp and rind are also used in cooking and baking. The juice of the lemon is about 5% to 6% citric acid, with a pH of around 2.2
                            , giving it a sour taste. The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods such as lemonade and lemon meringue pie.
                        </p>
                    </div>

                    <div className="reviews">
                    <h3>Reviews</h3>


                    {reviewList.map((val, key) =>{
                                            return (
                                                <ul>
                                                    <li className="single-review">
                                                        <div>
                                                            <div className="review-header">                                                                
                                                                <span className="name">{val.user_full_name}</span>
                                                                <span className="reviewd">reviewed</span>                                                                
                                                                <span className="remedy">{val.remedy_name}</span>
                                                                <br />                                                                
                                                                <span className="date">{val.review_date}</span>
                                                            </div>
                                                            <div className="review-body">
                                                                {val.review_body}
                                                                {val.review_id}
                                                            </div>
                                                            <input type="checkbox" id="comment-toggle" />
                                                            <div className="review-footer">
                                                                <span className="rating">*****</span>
                                                                <label for="comment-toggle" className="comment-icon comments">comments <span class="badge rounded-pill bg-success">99+</span></label>
                                                                {/* <h5 className="comments"> comments : 10</h5> */}
                                                            </div>
                                                            <div className="review-comments">
                                                                Rate review<span className="rating">*****</span> <br />
                                                                <div className="inputComment">
                                                                    <input type="text" placeholder="Add comment" onChange={handleChangeComment} />
                                                                    <button primary onClick={addComment}>Comment</button>
                                                                </div>
                                                                <div className="comments">
                                                                    <div className="">
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
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>                                                        
                                                    </li>
                                                </ul>
                                            )
                                        })}
                    </div>
                </div>
                    
            </Container>
        </Section>
        <Modal size="lg" show={review_body} onHide={handleCloseWriteReview} className="writeReviewModal">
            <div className="reviewContainer" >
                <Modal.Header className="reviewHeader" closeButton>
                    <Modal.Title>
                        <label for="writeReview" class="form-label">Write Review</label>
                    </Modal.Title>
                </Modal.Header>
                <div className="col-12">                                
                    <textarea rows="8" class="form-control review-text-area" id="writeReview" placeholder="" onChange={handleChangeComment} />
                </div>
                <Modal.Footer className="modalFooter">
                    <Button variant="secondary" className="add" type="submit" onClick={addReview} onclick={handleCloseWriteReview}>
                        Submit
                    </Button>
                    <Button variant="primary" onClick={handleCloseWriteReview} className="cancel">
                        Cancel
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
        </>
    )
}

export default details;

