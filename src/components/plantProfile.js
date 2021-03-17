import React, {useEffect, useState} from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';
import GloballStyle from '../globalStyles';
import Navbar from './navBar/navBar';
import Dropdown from './dropdown';
import Footer from './footer';

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
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
`;

const Button = styled.button`
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

// jhbshabs

function PlantProfile(){

    const [isOpen, setIsOpen] = useState(false)
    const [done, setDone] = useState(undefined);

    const [comment_body, setComment] =useState("")
    const [commentList, setCommentList] = useState([])
    
    const handleChangeComment = (event) =>{
        setComment(event.target.value)
    }
    
    const addComment = () =>{
        Axios.post("http://localhost:5001/api/comments", {
          comment_body:comment_body
        }).then(() =>{
          setCommentList([
            ...commentList, {comment_body:comment_body}
          ])
        })
    }

    const getComment = () =>{
        Axios.get("http://localhost:5001/api/comments").then((response) => {
          setCommentList(response.data)
        })
      }

    useEffect (()=>{
        getComment()
    },[])

    const toggle = () => {
        setIsOpen(!isOpen)
      }

    let { id } = useParams();
    console.log(
        id
    )

    const url = `http://localhost:5001/api/plants`
        
    const [plant, setPlant] = useState(null);
        
       
        

    let content = null;
    
    useEffect(() => {
        setTimeout(() => {
            axios.get(url)
            .then(response => {
                setPlant(response.data)
                
            })
            .then((data) => {
                setDone(true);
            })
            .catch(err => {
                console.log("This Page Can't be reached")
            }) 
        }, 2000);
        
    }, [url])

    if(plant){
        return (
            content = 
                <>
                     <GloballStyle/>
                     <Navbar toggle={toggle}/>
                    <Dropdown isOpen={isOpen} toggle={toggle}/>
                    <Section>
                    {
                        plant.map(singlePlant => (
                            singlePlant.plant_id == id ?

                                <Container className="row" style={{border:'1px solid'}}>
                                    <div className="col-md-4">
                                        
                                        <div className="img">
                                            <img src={singlePlant.plant_image} width="100%" height="100%" alt="image here" />
     
                                        </div>
    
                                            <h4>{singlePlant.plant_common_name}</h4>
                                            <h5>{singlePlant.plant_latin_name}</h5> 
                                       
                                        <Button>write a Review</Button>
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
                                        <h3>Description</h3>
                                        <p>{singlePlant.plant_description}</p>
                                        
                                        </div>

                                        <div className="reviews">
                                        <h3>Reviews</h3>
                                            <div className="single-review">
                                                <div className="review-header">
                                                    <span className="name">Emily Queen Tusiime</span>
                                                    <span className="reviewd">reviewed</span>
                                                    <span className="remedy">Ginger Tea</span>
                                                    <br />
                                                    <span className="date">11/11/2020</span>
                                                </div>
                                                <div className="review-body">
                                                    <p>
                                                    Lorem Ipsum is simply dummy text 
                                                    of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard
                                                    dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled
                                                 
                                                    </p>
                                                </div>
                                                <input type="checkbox" id="comment-toggle" />
                                                <div className="review-footer">
                                                    <span className="rating">*****</span>
                                                    <label for="comment-toggle" className="comment-icon comments">comments</label>
                                                    {/* <h5 className="comments"> comments : 10</h5> */}
                                                </div>
                                                <div className="review-comments">
                                                    Rate review<span className="rating">*****</span> <br />
                                                    <div className="inputComment">
                                                        <input type="text" placeholder="Add comment" onChange={handleChangeComment} />
                                                        <button primary onClick={addComment}>Comment</button>
                                                    </div>
                                                    <div className="comments">
                                                        <div className="singleComment">
                                                        {commentList.map((val, key) =>{
                                                            return (
                                                                <ul>
                                                                    <li>{val.comment_body}</li>
                                                                </ul>
                                                            )
                                                        })}
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>

                                            
                                        </div>
                                    </div>
                                        
                                </Container>: null
                                                
                                            
                        ))
                    }
                            </Section>
                            <Footer/>
                </>
        )
    }


    return (
       <>
        <div>
            {
               !done ?  <ReactLoading type={'cubes'} color={'green'} height={'20%'} width={'10%'} top={'50%'} left={'50%'} position={'absolute'}/> 
               :  {content}
           }
           
        </div>
           
          
       </>
    )
}

export default PlantProfile;