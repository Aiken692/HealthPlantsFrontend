import { makeStyles } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import ReviewsTable from '../components/Tables/reviewsTable';
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
