import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/header';
import PageHeader from '../components/pageHeader';
import Sidebar from '../components/sideBar/sideBar';
import '../components/styles/componentStyles.scss';

function Plantvaiants() {

    return (

        <>
            <Sidebar/>
            <div className="appMain">
                <Header title='Plant Variants'/>  
                <PageHeader/>
            </div>        
        </>
        
    )
}

export default Plantvaiants;
