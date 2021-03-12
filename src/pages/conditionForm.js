import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useForm, Form} from '../components/useForm';
import Controls from '../components/controls/control';
import * as List from '../pages/list/list';
import * as FaIcons from "react-icons/fa";










const initialFValues = {
    id :0,
    name:'',
    description:''
}



const useStyle = makeStyles({
    root: {
        width: "50%",
        marginLeft: '14px',
        marginTop: '14px',
        innerHeight: '40%',
        height: '150px'
    }
    
}
)

export default function ConditionForm(props) {



    const [affliction_common_name, setaffliction_common_name] = useState("");
    const [affliction_latin_name, setaffliction_latin_name] = useState("");
    const [affliction_description, setaffliction_description] = useState("");

const onFormSubmit = (e)=>{
    console.log("Here we go.....")
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('affliction_common_name', affliction_common_name);
    formData.append('affliction_latin_name', affliction_latin_name);
    formData.append('affliction_description', affliction_description);

    axios.post('http://localhost:5001/api/conditions', formData)
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

// const onChange= (e) => {
// 	const uploadedImage = e.target.files[0];	
// 	setFile(uploadedImage);
//  }




    const {addOrEdit, recordForEdit} = props;

    const validate = (fieldsValues) => {
        let temp = {}
        temp.name = values.name?"":"This field is required."
        temp.name = values.plantVariant?"":"This field is required."
        setErrors({
            ...temp
        })

        return Object.values(temp).every( x => x == "")
    }

   
    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    
    const classes = useStyle();


    const handleSubmit = e => {
        e.preventDefault()
        if (validate())
         addOrEdit(values, resetForm);
         List.insertRemedy(values)
    }

    useEffect(()=> {
        if(recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])
    

    return (
        // <form className={classes.root}>
            <Form onSubmit={onFormSubmit}>
              <Grid container>
                <Grid item xs={10}>
                    <Controls.Input type = "text" onChange={(event) => {
                            setaffliction_common_name(event.target.value)
                        }} 
                    label="Condition_common_name"
                    name="condition_common_name"
                    // value={values.name}
                    // error={ errors.name}         
                    /*THis name error is really disturbing me, i may need some help from Mr.JAcksn*/
                    />
                    <Controls.Input type = "text" onChange={(event) => {
                            setaffliction_latin_name(event.target.value)
                        }} 
                    label="Condition_latin_name"
                    name="condition_latin_name"
                    // value={values.name}
                    // error={ errors.name}         
                    /*THis name error is really disturbing me, i may need some help from Mr.JAcksn*/
                    />
{/* 
                    <Controls.Input                  
                    label="Remedy"
                    name="remedy"
                    // value={values.plantVariant}
                    onChange = {handleInputChange}
                    
                    />  */}


                </Grid>

                <Grid item xs={2}>
                
                <FaIcons.FaHospitalAlt style={{ color: 'green', fontSize: '400%'}}/>


                </Grid>


                <Grid item xs={12}>
                    <textarea onChange={(event) => {
                            setaffliction_description(event.target.value)
                        }} className={classes.root}
                        variant="outlined"
                        onChange = {handleInputChange}
                        rowsMax={4}
                        aria-label="maximum height"
                        label="Description"
                        placeholder='Description'
                        
                    />
                </Grid>

                <div className={classes.root}>
                    <Controls.Button
                        onClick={onFormSubmit}
                        type="submit"
                        text="Submit"
                    />

                    <Controls.Button
                        color="secondary"
                        text="Cancel"
                        onClick = {resetForm}
                    />
                </div>
               
              </Grid>
            </Form>
            
        // </form>
    )
}
