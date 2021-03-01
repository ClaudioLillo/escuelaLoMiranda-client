import { FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import React, {useState} from 'react'
import Courses from './Courses'

const useStyles = makeStyles((theme)=>({
    root: {
        margin: "20px",
        marginTop:"100px",
    },
    title: {
        textAlign: 'center',
    },
    formControl: {
        minWidth: 120,
        margin: theme.spacing(1),
    },
}))

const options = {
    "subject" : ["lenguaje", "matemáticas", "ciencias", "historia", "inglés", "ed. física", "religión", "música", "artes", "tecnología" ],
    "course" : ["1", "2", "3", "4", "5", "6", "7", "8", "K", "PK"],
    "teacher": ["prof. 1", "prof. 2"]
}

const dataCourses = [
    {level: "1", teacher: "prof. 1", id: 1},
    {level: "2", teacher: "prof. 1", id: 2},
    {level: "3", teacher: "prof. 1", id: 3},
    {level: "4", teacher: "prof. 2", id: 4},
    {level: "5", teacher: "prof. 2", id: 5},
    {level: "6", teacher: "prof. 2", id: 6}
]

const users = [
    {name: "Claudio", lastName: "Lillo", id: "1" , role: "admin", courseId: "4"},
    {name: "Firulais", lastName: "Lillo", id: "2" , role: "student", courseId: "4"},
    {name: "Grett", lastName: "Lillo", id: "3" , role: "student", courseId: "3"},
]

export default function Contents(){
    const classes = useStyles()
    const [show, setShow] = useState("subject")
    const [filter, setFilter] = useState("")

    const handleChange = (e)=>{
        if (e.target.name==="show"){
            setShow(e.target.value)
        }
        else if(e.target.name==="filter"){
            setFilter(e.target.value)
        }
        
    }
    if(show){
        console.log(show)
    }
    return(
        <div className = {classes.root}>
            <Paper>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography className={classes.title}>Contenidos</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <FormControl  variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="show">Ver</InputLabel>
                            <Select className={classes.select}
                                label="show"
                                name="show"
                                value={show}
                                onChange={handleChange}>
                                <MenuItem value={"subject"}>Asignatura</MenuItem>
                                <MenuItem value={"course"}>Curso</MenuItem>
                                <MenuItem value={"teacher"}>Profesor</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <FormControl  variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="filter">Filtrar</InputLabel>
                            <Select className={classes.select}
                                label="filter"
                                name="filter"
                                value={filter}
                                onChange={handleChange}>
                                {options && options[show].map((option, index)=>
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                                )}
                            </Select>
                    </FormControl>
                </Grid>
            </Grid>
            </Paper>
            {(dataCourses && show==="course") && <Courses dataCourses={dataCourses} filter={filter}/>}
            
        </div>
    )
}