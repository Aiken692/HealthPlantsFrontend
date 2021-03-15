
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
background-color:#CAFFCA;
&:focus{
    outline:none;
    /* border:none; */
}
`;

function PlantsTable(){
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleCloseEdit = () => setShowEdit(false);

    const [showDetail, setShowDetail] = useState(false);
    const handleShowDetail = () => setShowDetail(true);
    const handleCloseDetail = () => setShowDetail(false);

    const [showDel, setShowDel] = useState(false);
    const handleShowDel = () => setShowDel(true);
    const handleCloseDel = () => setShowDel(false);
 
    return(
        <div className="Table main-content">
            <div>                
                <TableHeader>
                    <Input type="text" placeholder="search"></Input>                    
                    <Button variant="primary" onClick={handleShowAdd}>Add</Button>
                </TableHeader>
                <table className="table  table-hover tableStriped plants-table">
                <thead>
                    <tr>
                        
                        <th>ID</th>
                        <th>common Name</th>
                        <th>Scientific Name</th>  
                        <th></th>
                        <th></th>                  
                    </tr>
                </thead>

                <tbody>
                    <tr onClick={handleShowDetail}>
                        <td>001</td>
                        <td>Drumstic Tree</td>
                        <td>Moringa Oleifera</td>
                        <td><Button variant="primary" onClick={handleShowEdit}> E</Button></td>
                        <td><Button variant="primary" onClick={handleShowDel}> D</Button></td>
                    </tr>
                    <tr>
                    
                    </tr>
                    <tr>
                    
                    </tr>
                    <tr>
                    
                    </tr>
                    <tr>
                    
                    </tr>
                    <tr>
                    
                    </tr>
                    <tr>
                    
                    </tr>
                    <tr>
                    
                    </tr>

                </tbody>
            </table>
            </div>

            <Modal show={showAdd} onHide={handleCloseAdd} className="addUserModal">
                <Modal.Header closeButton className="modalHeader">
                    <Modal.Title>Add New Plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form class="row g-3">
            
                    <div class="col-12">
                        <div className="row">
                            <label for="plant-image" class="">
                                <div className="plantImage">

                                </div>
                            </label>
                            <input type="file" id="plant-image"/>
                        </div>

                    </div>
                    <div class="col-12">
                        <div className="row">
                            <label for="excel" class="">
                                <div className="plantImage">

                                </div>
                            </label>
                            <input type="file" class="" id="excel"  />
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="common-name" class="form-label">Common Name</label>
                        <input type="text" class="form-control" id="common-name" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="scientific-name" class="form-label">Scientific Name</label>
                        <input type="text" class="form-control" id="scientific-name" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="description" class="form-label">Description</label>
                        <textarea rows="6" class="form-control" id="description" placeholder="" />
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
            <Modal.Title>Edit Plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form class="row g-3">
            
                    <div class="col-12">
                        <div className="row">
                            <label for="plant-image" class="">
                                <div className="plantImage">

                                </div>
                            </label>
                            <input type="file" id="plant-image"/>
                        </div>

                    </div>
                    <div class="col-12">
                        <div className="row">
                            <label for="excel" class="">
                                <div className="plantImage">

                                </div>
                            </label>
                            <input type="file" class="" id="excel"  />
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="common-name" class="form-label">Common Name</label>
                        <input type="text" class="form-control" id="common-name" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="scientific-name" class="form-label">Scientific Name</label>
                        <input type="text" class="form-control" id="scientific-name" placeholder="" />
                    </div>
                    <div class="col-12">
                        <label for="description" class="form-label">Description</label>
                        <textarea rows="6" class="form-control" id="description" placeholder="" />
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
                       <h4>Please note this entry will be permanently 
                           deleted from your database! Would you like to 
                           go ahead and delete this entry from your database?
                        </h4>
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

            <Modal size="lg" show={showDetail} onHide={handleCloseDetail} className="viewReviewModal viewPlantModal">
                <div className="reviewContainer" >
                    <Modal.Header className="reviewHeader" closeButton>
                        <Modal.Title>
                            <span className="name">DrumStick tree</span>
                            <span className="reviewd">/</span>
                            <span className="remedy">Moringa Oleifera</span>
                        </Modal.Title>
                    </Modal.Header>

                    <div className="review plant">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={fruit} class="card-img-top" alt="img here" />
                                <button>view plant variants</button>
                                <button onClick={handleShowEdit} >Edit plant</button>
                            </div>
                            <div className="col-md-8">
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
                            </div>

                        </div>  
                        
                        <div className="reviewFooter">
                            <span>Reviews: 10</span>
                            {/* <span><a href="#">Similar posts</a></span> */}
                        </div>
                    </div>
                    <div className="reviewComments">
                        <div className="singleComment">
                            <div>
                                <span className="name">Emily Queen Tusiime</span>
                                <span className="reviewd"> reviewed </span>
                                <span className="name">DrumStick tree</span>
                                <br />
                                <span className="remedy">*****</span>
                                <span className="reviewd"> 10 comments </span>
                                <span className="date">11/11/2020</span>
                            </div>
                            <div>
                                <p className="plantReview" >Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled
                                it to make a type specimen book. 
                                It has .........
                                </p>
                            </div>
                            
                        </div>
                        <div className="singleComment">
                            <div>
                                <span className="name">Emily Queen Tusiime</span>
                                <span className="reviewd"> reviewed </span>
                                <span className="name">DrumStick tree</span>
                                <br />
                                <span className="remedy">*****</span>
                                <span className="reviewd"> 10 comments </span>
                                <span className="date">11/11/2020</span>
                            </div>
                            <div>
                                <p className="plantReview" >Lorem Ipsum is simply dummy text 
                                of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled
                                it to make a type specimen book. 
                                It has .........
                                </p>
                            </div>
                            
                        </div>

                        <a className="viewAll" href='#!'>see all reviews</a>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default PlantsTable;