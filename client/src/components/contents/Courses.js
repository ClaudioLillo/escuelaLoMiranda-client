import React from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root: {
        margin: "20px",
        marginTop:"100px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    paper: {
        minWidth: 200,
        margin: theme.spacing(2),
    },
}))

export default function Courses({dataCourses, filter}){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            {dataCourses && dataCourses.map((course,index)=>
            <Paper className={classes.paper} key={index}>
                <Typography>{course.level +"°"}</Typography>
                <Typography>{"Prof: " + course.teacher}</Typography>
            </Paper>)}
        </div>
    )
}