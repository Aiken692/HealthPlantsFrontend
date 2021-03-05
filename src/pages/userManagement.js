import React from 'react';
import Sidebar from '../components/sideBar/sideBar';
import Header from '../components/header';
import UserTable from '../components/tables/userTables';
import '../components/styles/componentStyles.scss';

function UserManagement(){

    return(
        <>
           <Sidebar/>
           <div className="appMain">
               <Header title="USERS"/>
               <UserTable />
           </div>
        </>
           
    )
}

export default UserManagement;