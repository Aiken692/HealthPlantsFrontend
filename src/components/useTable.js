import { makeStyles, Table, TableCell, TableHead, TableRow } from '@material-ui/core'
// import React, { useState } from 'react'
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.black,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td':{
            fontWeight: '300'
        },
        '& tbody tr: hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer'
        }
    }
}))


export default function useTable(records, headCells, filterFn) {

    const classes = useStyles();

    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props =>{
        return (
            <TableHead style={{ color: green[500] }}>
                <TableRow>
                    {
                        headCells.map(headCells => (<TableCell key={headCells.id}>
                            {headCells.label}
                        </TableCell>))
                    }
                </TableRow>
            </TableHead>
        )
    }
    
    return {
        TblContainer,
        TblHead
    }
}
