import React, { useState, useEffect } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import RemediesForm from './remediesForm';
import useTable from "../components/useTable";
import * as List from "../pages/list/list";
import Controls from '../components/controls/control';
import Popup from "../components/popup";
import Sidebar from '../components/sideBar/sideBar';
import '../components/styles/componentStyles.scss';
import * as FaIcons from "react-icons/fa";
import { Search} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import green from '@material-ui/core/colors/green';

import Axios from 'axios';

require("es6-promise").polyfill();
require("isomorphic-fetch");





const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(6)
    },
    searchInput:{
        width: '40%'
    },
    newButton: {
        position: 'absolute',
        right:'10px'
    }
    // ,
    // appMain: {
    //     paddingLeft: '17.5%',
    //     width: '100%'
    //   }
}))


const headCells = [
    {id:'id', label:'ID'},
    {id:'name', label:'Name'},
    {id:'plantVariant', label:'Plant Variants'},
    {id:'reviews', label:'Reviews'},
    {id:'actions', label: 'Actions', disableSorting: true}
]


export default function Remedies() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(null)
    const [ openPopup, setOpenPopup] = useState(false)




    const {
        TblContainer,
        TblHead
    } = useTable(records, headCells);

    // This is to define the search function
    const handleSearch = e =>  {
        let target = e.target;
        
    }
   
    // const addOrEdit = (remedy, resetForm) => {
    //     List.insertRemedy(remedy)
    //      resetForm();
    //      setOpenPopup(false);
    //      setRecords(List.getAllRemedies())
    // }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }


    const [remedies, setRemedy] = useState([]);
    // let url ='http://localhost:5001/api/plants';
    let url ='https://health-plants-of-uganda.herokuapp.com/api/remedies';


    const getData = async () => {
        // let url = 'http://localhost:5001/api/remedies';

        const response = await Axios.get(url);

        setRemedy(response.data);


    }

    useEffect(() => {
        getData();

    }, []);

    const renderBody = () => {
        return remedies && remedies.map(({
            remedy_id,
            remedy_name,
            plant_variant_name,
            'COUNT(*)': COUNT
            
        }) => {
            return (
                
                <TableRow key={remedy_id}>
                    <TableCell>{remedy_id}</TableCell>
                    <TableCell>{remedy_name}</TableCell>
                    <TableCell>{plant_variant_name}</TableCell>
                    <TableCell>{COUNT} <VisibilityIcon style={{ color: green[500] }} fontSize="small"/> </TableCell>
                    <TableCell>
                        <Controls.ActionButton>
                            <EditOutlinedIcon fontSize="small"
                            onClick= { ()=> {openInPopup()}} color='primary'/>
                        </Controls.ActionButton>
                        
                        <Controls.ActionButton>
                            <DeleteIcon fontSize="small"  color='secondary'/>
                        </Controls.ActionButton>
                    </TableCell>
                </TableRow>
            )
        })
    }


    return (
        <>
            <Sidebar/>
            

            <div className="appMain">
            <Header title='REMEDY'/>  
            <PageHeader/>

         <Paper className={classes.pageContent}>
        
        <Toolbar>
            <Controls.Input
                label='Search'
                
                className={classes.searchInput}
                InputProps={{
                    startAdorment: (<InputAdornment position='start'>
                        <Search/>
                        
                    </InputAdornment>)
                }}
                
                onChange={{handleSearch}} 
            />

            <Controls.Button
            text = 'Add New'
            variant = 'outlined'
            startIcon = {<AddIcon/> }
            className={classes.newButton}
            onClick = {() => setOpenPopup(true)}
            endIcon= {<FaIcons.FaMortarPestle/>}
            style={{ color: green[800] }}
            />

            

                    
            

         
        </Toolbar>

        <TblContainer>
            <TblHead />
            <TableBody>
                {renderBody()}
                
                

            </TableBody>
        </TblContainer>
    </Paper>
    
    <Popup 
        title = 'Remedy Form'
        openPopup = {openPopup}
        setOpenPopup = {setOpenPopup}
    >
        <RemediesForm
        recordForEdit = { recordForEdit}
        // addOrEdit =  {addOrEdit}
        />
    </Popup>
   
</div>

        </>
        
        
    )
}
