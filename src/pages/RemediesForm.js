import { Grid, makeStyles} from '@material-ui/core';
import React, { useEffect } from 'react'
import {useForm, Form} from '../components/useForm';
import Controls from '../components/controls/Control'
import * as FaIcons from "react-icons/fa";







const initialFValues = {
    id :0,
    name:'',
    description:'',
    plantVariant:'',
    reviews:''
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

export default function RemediesForm(props) {

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
        e.preventDefault();
        
    }

    useEffect(()=> {
        if(recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])
    

    return (

        <>
    

      
            <Form onSubmit = {handleSubmit}>
              <Grid container>
                <Grid item xs={10}>
                    <Controls.Input
                    label="Name"
                    name="name"
                    // value={values.name}
                    onChange = {handleInputChange}
                    // error={ errors.name}         
                    /*THis name error is really disturbing me, i may need some help from Mr.JAcksn*/
                    />

                    <Controls.Input                  
                    label="Plant Variant"
                    name="plantVariant"
                    // value={values.plantVariant}
                    onChange = {handleInputChange}
                    
                    /> 

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
           
            
        </>
    )

}
