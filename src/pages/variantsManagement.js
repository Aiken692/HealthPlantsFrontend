import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Sidebar from '../components/Sidebar/Sidebar';
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
