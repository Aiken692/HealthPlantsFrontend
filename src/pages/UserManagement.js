import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header';
import UserTable from '../components/Tables/userTables';
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