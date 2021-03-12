import { Grid, makeStyles} from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {useForm, Form} from '../components/useForm';
import Controls from '../components/controls/control'
import * as FaIcons from "react-icons/fa";
import axios from 'axios';









// const initialFValues = {
//     id :0,
//     name:'',
//     description:'',
//     plantVariant:'',
//     reviews:''
// }



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

export default function RemediesForm(props) {

    const [selectedImage, setSelectedImage] = useState();
    const [remedy_name, setRemedy_name] = useState();
    const [remedy_preparation, setRemedy_preparation] = useState();


    const {addOrEdit, recordForEdit} = props;

    // const validate = (fieldsValues) => {
    //     let temp = {}
    //     temp.name = values.name?"":"This field is required."
    //     temp.name = values.plantVariant?"":"This field is required."
    //     setErrors({
    //         ...temp
    //     })

    //     return Object.values(temp).every( x => x == "")
    // }

   
    // const{
    //     values,
    //     setValues,
    //     errors,
    //     setErrors,
    //     handleInputChange,
    //     resetForm
    // } = useForm(initialFValues, true, validate);

    
    const classes = useStyle();


    const onFormSubmit = e => {
        console.log("Hello here we are....")
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('myImage', selectedImage);
        formData.append('remedy_name', remedy_name);
        formData.append('remedy_preparation', remedy_preparation);
        console.log(selectedImage);
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        };
    
        axios.post('http://localhost:5001/api/remedies', formData, config)
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

    const handleInputChange = e => {
        const uploadedImage = e.target.files[0];	
        setSelectedImage(uploadedImage);
    }

    // useEffect(()=> {
    //     if(recordForEdit != null)
    //         setValues({
    //             ...recordForEdit
    //         })
    // }, [recordForEdit])
    

    return (

        <>
    

      
            <Form onSubmit = {onFormSubmit}>
              <Grid container>
                <Grid item xs={10}>
                    <Controls.Input
                    label="Name"
                    name="name"
                    onChange={(event) => {
                        setRemedy_name(event.target.value)
                    }}
                    // value={values.name}
                    // onChange = {handleInputChange}
                    // error={ errors.name}         
                    /*THis name error is really disturbing me, i may need some help from Mr.JAcksn*/
                    />
{/* 
                    <Controls.Input                  
                    label="Plant Preparation"
                    name="plantPreparation"
                    onChange={(event) => {
                        setRemedy_preparation(event.target.value)
                    }}
                    />  */}

                    <input                  
                    label="Image"
                    name="image"
                    type="file"
                    onChange = {handleInputChange}
                    
                    /> 


                </Grid>

                <Grid item xs={2}>
                
                <FaIcons.FaMortarPestle style={{ color: 'green', fontSize: '100px'}}/>


                </Grid>


                <Grid item xs={12}>
                    <textarea className={classes.root}                  
                        label="remedy Preparation"
                        name="remedyPreparation"
                        onChange={(event) => {
                            setRemedy_preparation(event.target.value)
                        }}
                        variant="outlined"
                        // onChange = {handleInputChange}
                        rowsMax={4}
                        aria-label="maximum height"
                        placeholder='Remedy Preparation'
                        
                    />
                </Grid>

                <div className={classes.root}>
                    <Controls.Button
                        type="submit"
                        text="Submit"
                        onClick={onFormSubmit}
                    />

                    <Controls.Button
                        color="secondary"
                        text="Cancel"
                        
                    /> 
                </div>
               
              </Grid>
            </Form>
           
            
        </>
    )

}
