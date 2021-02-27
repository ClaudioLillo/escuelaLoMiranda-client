import React from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core'

const useStyles=makeStyles((theme)=>({
    table: {
        backgroundColor: 'rgba(0,20,200,0.2)',
        width: '40%',
        marginTop: '10px',
    },
    titleCell: {
        fontWeight: '600',
    },
    title:{
        marginTop: '40px',
        fontWeight: '600',
    },
    tablerow:{
        "&:hover":{
            cursor: 'pointer',
        },
    },
}))

export default function UsersTable({users, filter}){
    const classes = useStyles()
    return(
        <>
        <Typography className={classes.title}>Usuarios</Typography>
        <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                    <TableCell align='center' className={classes.titleCell}>Nombre</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Apellido</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map((user,index)=>
                        <TableRow key={index} hover className={classes.tablerow}>
                        <TableCell align='center'>{user.name}</TableCell>
                        <TableCell align='center'>{user.lastName}</TableCell>
                        <TableCell align='center'>{user.email}</TableCell>
                    </TableRow>
                    )}
                    
                </TableBody>
            </Table>
        </>
    )
}