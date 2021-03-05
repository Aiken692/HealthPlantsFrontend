import { makeStyles } from '@material-ui/core'
import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sideBar/sideBar'
import ReviewsTable from '../components/tables/reviewsTable';
import '../components/styles/componentStyles.scss';

const ReviewsManagement = () => {

    return (
        <>
            <Sidebar/>
            <div className="appMain">
                <Header title='Reviews'/>
                <ReviewsTable />
            </div>
        </>
    )
}

export default ReviewsManagement
