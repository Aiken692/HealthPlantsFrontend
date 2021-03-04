import React from 'react';
import styled from 'styled-components';
import fruit from '../../Images/fruit.jpg'
import '../styles/conditions.scss';

const Section = styled.section`
    width: 100%;
    min-height: 50vh;
    
`;

const Container = styled.div`
    width:100%;
    padding:5rem;
`;


function container(){

    return(
        <Section>
            <Container className="row">
                <div className="col-md-4">
                <h1>Top Reviews</h1>

                    <hr style={{border: '2px solid black'}} />
                    <div class="card mb-3" style={{maxWidth: '540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={fruit} class="card-img-top" alt="img here" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mb-3" style={{maxWidth: '540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={fruit} class="card-img-top" alt="img here" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card mb-3" style={{maxWidth: '540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={fruit} class="card-img-top" alt="img here" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3" style={{maxWidth: '540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={fruit} class="card-img-top" alt="img here" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <h1>Conditions</h1>
                    <hr style={{border: '2px solid #fff'}} />
                    <div class="row jointCadiac">
                        
                        <div className="col-md-12">
                            <div className="card mb-3">
                                <img src="https://dimensionsofdentalhygiene.com/wp-content/uploads/2017/10/1017_managing.jpg" className="card-img-top" alt="image goes here" />
                                <div className="card-body row">
                                    <h5 className="card-title col-md-12"> Cardiac Conditions</h5>
                                    <div className="card ml-2" style={{width:'20%'}}>
                                        <img src={fruit} className="card-img-top" alt="image goes here" />
                                        <div className="card-footer">
                                            <a href="/cardicadetail" >view</a>
                                        </div>
                                    </div>
                                    
                                    <div className="card ml-2" style={{width:'20%'}}>
                                        <img src={fruit} className="card-img-top" alt="image goes here" />
                                        <div className="card-footer">
                                            <a href="/cardicadetail" >view</a>
                                        </div>
                                    </div>
                                    
                                    <div className="card ml-2" style={{width:'20%'}}>
                                        <img src={fruit} className="card-img-top" alt="image goes here" />
                                        <div className="card-footer">
                                            <a href="#" >view</a>
                                        </div>
                                    </div>
                                    <div className="card ml-2" style={{width:'20%'}}>
                                        <img src={fruit} className="card-img-top" alt="image goes here" />
                                        <div className="card-footer">
                                            <a href="#" >view</a>
                                        </div>
                                    </div>
                                    <a href="/cardica" className="viewAll">view all</a>
                                </div>
                            </div>                            
                        </div>
                        

                        <div className="col-md-12">
                            <div className="card mb-3">
                                <img src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/bones-and-joints/shoulder-pain-hero.ashx?h=500&la=en&mh=500&mw=1300&w=1297&hash=FC4B80DFE79904E055BFE6531B584E2F360A0EB5" className="card-img-top" alt="image goes here" />
                                <div className="card-body row">
                                <h5 className="card-title col-md-12"> Joint Conditions</h5>
                                    <div className="card ml-2" style={{width:'20%'}}>
                                        <img src={fruit} className="card-img-top" alt="image goes here" />
                                        <div className="card-footer">
                                            <a href="/jointdetail" >view</a>
                                        </div>
                                    </div>
                                    <div className="card ml-2" style={{width:'20%'}}>
                                        <img src={fruit} className="card-img-top" alt="image goes here" />
                                        <div className="card-footer">
                                            <a href="/jointdetail" >view</a>
                                        </div>
                                    </div>
                                    <div className="card ml-2" style={{width:'20%'}}>
                                        <img src={fruit} className="card-img-top" alt="image goes here" />
                                        <div className="card-footer">
                                            <a href="#" >view</a>
                                        </div>
                                    </div>
                                    <div className="card ml-2" style={{width:'20%'}}>
                                        <img src={fruit} className="card-img-top" alt="image goes here" />
                                        <div className="card-footer">
                                            <a href="/jointdetail" >view</a>
                                        </div>
                                    </div>
                                    <a href="/joint" className="viewAll">view all</a>
                                </div>
                            </div>
                        </div>
                        

                    </div>   
                </div>
                
            </Container>
        </Section>
    )
}

export default container;
