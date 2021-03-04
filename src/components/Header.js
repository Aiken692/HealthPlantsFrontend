import React from 'react'
import { AppBar, Toolbar, Grid, IconButton, makeStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';





const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgba(202, 255, 202, 1)'
    }
})

const  Header = (props) =>{
    const {title} = props;
    const classes = useStyles();


    return (
        <AppBar position="static" className={classes.root} style={{position: 'fixed'}}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={3}>
                        
                        <h1 style={{color: 'Black'}}>{title}</h1>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={3}>
                        <a href='/login'>
                        <IconButton style={{color: 'red', fontSize: "Large"}} >
                            <ExitToAppIcon />
                        </IconButton>
                        </a>
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;


// inline styles fixed navbar