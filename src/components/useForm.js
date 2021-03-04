import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';


export function useForm(initialFValues, validateOnChange= false, validate) {

    const [ values, setValues] = useState(initialFValues);
    const [ errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange)
        validate({[name] : value})
    }


    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

    return (
       values,
       setValues,
       handleInputChange,
       errors,
       setErrors,
       resetForm
    )
}

// This code  is for the form.

const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width: '50%',
            margin: theme.spacing(2)
        }
    }
}))



export function Form(props) {

    const classes = useStyles();
    const {childen,...other} = props;

    return (
        <form className={classes.root} autoComplete="off">
            {props.children}
        </form>
    )
}

