import React, {useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent, IconButton, DialogTitle, FormControl, Grid, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography, TextField} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {useDispatch, useSelector} from 'react-redux'
import {createSubject, deleteSubject} from '../../redux/actions/subject'
import {ToCamelCase} from '../utils/StringMethods'

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
    button:{
        marginTop: '30px',
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    dialogActions: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        fontSize: '16px',
    },
}))

export default function Subjects(){
    const classes = useStyles()
    const dispatch = useDispatch()
    const subjects = useSelector(state=>state.subject.data)
    const [open, setOpen] = useState(false)
    const [inputs, setInputs] = useState({
        name: ""
    })

    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
    const handleChange = (e)=>{
        console.log(e.target.name)
        setInputs({...inputs, [e.target.name]:e.target.value})
    }
    const handleSubmit =()=>{
        dispatch(createSubject(inputs))
        handleClose() 
    }
    const handleDelete = (id)=>{
        dispatch(deleteSubject({id:id}))
    }
    return(
        <div>
            <Grid container>
                <Grid item xs={6} sm={6}>
                    <Typography className={classes.title}>Asignaturas</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Button onClick={handleOpen} variant="outlined" className={classes.button}>+</Button>
                </Grid>
            <Grid item xs={12}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                    <TableCell align='center' className={classes.titleCell}>Asignatura</TableCell>
                    <TableCell align='center' className={classes.titleCell} >Eliminar/Editar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subjects && subjects.map((subject, index)=>
                    <TableRow key={index} hover className={classes.tablerow}>
                        <TableCell align='center'>{ToCamelCase(subject.name)}</TableCell>
                        <TableCell align='center'>
                            <IconButton onClick={()=>handleDelete(subject.id)} >
                                <DeleteIcon id={subject.id} className={classes.icon}/>
                            </IconButton>
                            <IconButton>
                                <EditIcon className={classes.icon}/>
                            </IconButton>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            </Grid>
            
            <Dialog open={open}>
                <DialogTitle>Agregar Asignatura</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <FormControl>
                        <TextField
                            label="Nombre asignatura"
                            onChange={handleChange}
                            name="name"
                            />
                    </FormControl>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={handleClose}  variant="outlined">Cancelar</Button>
                    <Button onClick={handleSubmit} variant="outlined">Agregar</Button>
                </DialogActions>
            </Dialog>
            </Grid>
           
        </div>
    )
}