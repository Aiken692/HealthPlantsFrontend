import React from 'react';
import Table from '../components/tables/plantMgtTable';
import Sidebar from '../components/sideBar/sideBar';
// import Header from '../components/Header';
// import '../components/styles/componentStyles.scss';
function PlantManagement(){

    return(
        <>
            {/* <Sidebar/> */}
           <div className="appMain">
               {/* <Header title="PLANTS"/> */}
               <Table />
               {/* <PlantsTable /> */}
           </div>    
        </>
           
    )
}
export default PlantManagement;