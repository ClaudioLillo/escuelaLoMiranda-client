import React from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core'

const useStyles=makeStyles((theme)=>({
    table: {
        backgroundColor: 'rgba(0,20,200,0.2)',
        width: '80%',
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

export default function Courses(){
    const classes = useStyles()
    return(
        <div>
            <Typography className={classes.title}>Cursos</Typography>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                    <TableCell align='center' className={classes.titleCell}>Curso</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Profesor Jefe</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Alumnos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow hover className={classes.tablerow}>
                        <TableCell align='center'>1°B</TableCell>
                        <TableCell align='center'>Adolph Hitler</TableCell>
                        <TableCell align='center'>45</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}