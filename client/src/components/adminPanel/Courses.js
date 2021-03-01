import React, {useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent, MenuItem, DialogTitle, FormControl, Grid, InputLabel, makeStyles, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography, TextField} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {createGrade} from '../../redux/actions/grade'

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
}))

const availableGrades = ["1","2","3","4","5","6","7","8","Kinder","Pre-Kinder"]
const letters =["A","B","C","D","E","Ninguna"]

export default function Courses(){
    const grades = useSelector(state=>state.grade.data)
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [inputs, setInputs] = useState({
        level: "1",
        letter: "A",
        teacher: ""
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
    const handleSubmit = ()=>{
        dispatch(createGrade(inputs))
        
    }
    if(inputs){
        console.log(inputs)
    }
    return(
        <div>
            <Grid container>
                <Grid item xs={6} sm={6}>
                    <Typography className={classes.title}>Cursos</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Button onClick={handleOpen} variant="outlined" className={classes.button}>+</Button>
                </Grid>
            <Grid item xs={12}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                    <TableCell align='center' className={classes.titleCell}>Curso</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Profesor Jefe</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Alumnos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {grades && grades.map((grade, index)=>
                    <TableRow key={index} hover className={classes.tablerow}>
                        <TableCell align='center'>{grade.level + "° " + grade.letter}</TableCell>
                        <TableCell align='center'>{grade.teacher}</TableCell>
                        <TableCell align='center'>{"-"}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            </Grid>
            
            <Dialog open={open}>
                <DialogTitle>Agregar Curso</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <FormControl>
                        <InputLabel htmlFor="level">Nivel</InputLabel>
                        <Select className={classes.select}
                                label="Nivel"
                                name="level"
                                value={inputs && inputs.level}
                                onChange={handleChange}>
                                {availableGrades && availableGrades.map((grade, index)=>
                                    <MenuItem key={index} value={grade}>{grade}</MenuItem>)}
                            </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="letter">Letra</InputLabel>
                        <Select className={classes.select}
                                label="Letra"
                                name="letter"
                                value={inputs.letter}
                                onChange={handleChange}>
                                {letters && letters.map((letter, index)=>
                                    <MenuItem key={index} value={letter}>{letter}</MenuItem>)}
                            </Select>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Profesor Jefe"
                            onChange={handleChange}
                            name="teacher"
                            />
                    </FormControl>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={handleClose} variant="outlined">Cancelar</Button>
                    <Button onClick={handleSubmit} variant="outlined">Agregar</Button>
                </DialogActions>
            </Dialog>
            </Grid>
           
        </div>
    )
}