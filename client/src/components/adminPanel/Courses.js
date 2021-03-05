import React, {useState} from 'react'
import { Button, Dialog, DialogActions, DialogContent, MenuItem, DialogTitle, FormControl, Grid, InputLabel, makeStyles, Select, Table, TableBody, TableCell, TableHead, TableRow, Typography, TextField} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {createCourse} from '../../redux/actions/course'


const useStyles=makeStyles((theme)=>({
    table: {
        backgroundColor: 'rgba(0,20,200,0.2)',
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



export default function Courses(){
    const grades = useSelector(state=>state.grade.data)
    const subjects = useSelector(state=>state.subject.data)
    const courses = useSelector(state=>state.course.data)
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [inputs, setInputs] = useState({
        gradeId: "",
        teacher: "",
        subjectId: ""
    })
    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
    const handleChange = (e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value})
    }
    const handleSubmit = ()=>{
        dispatch(createCourse(inputs))
        
    }
    const findGrade=(id)=>{
        if(!grades){
            return 0
        }
        for(let i of grades){
            if (i.id===id){
                return i.level+"° "+i.letter
            }
        }        
        return(id)
    }
    const findSubject=(id)=>{
        if(!subjects){
            return 0
        }
        for(let i of subjects){
            if (i.id===id){
                return i.name
            }
        }        
        return(id)
    }

    return(
        <div>
            <Grid container>
                <Grid item xs={6} sm={6}>
                    <Typography className={classes.title}>Clases</Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Button onClick={handleOpen} variant="outlined" className={classes.button}>+</Button>
                </Grid>
            <Grid item xs={12}>
            <Table className={classes.table} size="medium">
                <TableHead>
                    <TableRow>
                    <TableCell align='center' className={classes.titleCell}>Curso</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Profesor</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Asignatura</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses && courses.map((course, index)=>
                    <TableRow key={index} hover className={classes.tablerow}>
                        <TableCell align='center'>{findGrade(course.gradeId)}</TableCell>
                        <TableCell align='center'>{course.teacher}</TableCell>
                        <TableCell align='center'>{findSubject(course.subjectId)}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            </Grid>
            
            <Dialog open={open}>
                <DialogTitle>Agregar Clase</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <FormControl>
                        <InputLabel htmlFor="grade">Curso</InputLabel>
                        <Select className={classes.select}
                                label="Curso"
                                name="gradeId"
                                value={inputs && inputs.gradeId}
                                onChange={handleChange}>
                                {grades && grades.map((grade, index)=>
                                    <MenuItem key={index} value={grade.id}>{grade.level+"° "+grade.letter}</MenuItem>)}
                            </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="subjectId">Asignatura</InputLabel>
                        <Select className={classes.select}
                                label="Asignatura"
                                name="subjectId"
                                value={inputs.subjectId}
                                onChange={handleChange}>
                                {subjects && subjects.map((subject, index)=>
                                    <MenuItem key={index} value={subject.id}>{subject.name}</MenuItem>)}
                            </Select>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Profesor Jefe"
                            onChange={handleChange}
                            name="teacher"
                            value={inputs.teacher}
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