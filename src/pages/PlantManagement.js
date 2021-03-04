import React from 'react';
import Table from '../components/Tables/table';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header';
import '../components/styles/componentStyles.scss';

function PlantManagement(){

    return(
        <>
            <Sidebar/>
           <div className="appMain">
               <Header title="PLANTS"/>
               <Table />
               {/* <PlantsTable /> */}
           </div>    
        </>
           
    )
}
export default PlantManagement;