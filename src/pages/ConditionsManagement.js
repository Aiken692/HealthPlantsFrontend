import React, { useState } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import Header from '../components/Header'
import PageHeader from '../components/PageHeader';
import ConditionForm from './ConditionForm';
import * as FaIcons from "react-icons/fa";
import useTable from "../components/useTable";
import * as List from "../Pages/List/list"
import Controls from '../components/controls/Control'
import { Search} from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import Popup from "../components/Popup";
import Sidebar from '../components/Sidebar/Sidebar';

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
        right:'5%'
    },
    appMain: {
        paddingLeft: '17.5%',
        width: '100%'
      }
}))


const headCells = [
    {id:'id', label:'ID'},
    {id:'name', label:'Disease Name'},
    {id:'description', label:'Description'},
    {id:'actions', label: 'Actions', disableSorting: true}
]

function ConditionManagement(){

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(List.getAllRemedies())
    const [ openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead
    } = useTable(records, headCells);

    // This is to define the search function
    const handleSearch = e =>  {
        let target = e.target;
    }
    // the handle search function is not complete.



    const addOrEdit = (remedy, resetForm) => {
        List.insertRemedy(remedy)
         resetForm();
         setOpenPopup(false);
         setRecords(List.getAllRemedies())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }


    return (
        <>
        <Sidebar />
            <div className='remedyMgt appMain'>
                
            <Header title='CONDITIONS'/>  
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
                    endIcon= {<FaIcons.FaHospitalAlt/>}
                    />

                    

                            
                    

                 
                </Toolbar>
 
                <TblContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            // records.map
                            (item =>(
                                    <TableRow key={item.id}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.description}</TableCell>
                                        <TableCell>
                                            <Controls.ActionButton
                                                color='primary'>
                                                <EditOutlinedIcon fontSize="small"
                                                onClick= { ()=> {openInPopup(item)}}/>
                                            </Controls.ActionButton>
                                            
                                            <Controls.ActionButton
                                                color='secondary'>
                                                <CloseIcon fontSize="small"/>
                                            </Controls.ActionButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                            
                        }
                        

                    </TableBody>
                </TblContainer>
            </Paper>
            
            <Popup 
                title = 'Condition Form'
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
                <ConditionForm
                recordForEdit = { recordForEdit}
                addOrEdit =  {addOrEdit}/>
            </Popup>
           
        </div>
        </>
    )
}

export default ConditionManagement;

