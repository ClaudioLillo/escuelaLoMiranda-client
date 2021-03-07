import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../../redux/actions/user'
import {getGrades} from '../../redux/actions/grade'
import {getSubjects} from '../../redux/actions/subject'

import UserData from './UserData'
import Courses from './Courses'




const useStyles = makeStyles((theme)=>({
    root: {
        margin: "20px",
        marginTop: "100px",
        borderRadius: "5px",
        padding: "30px",
    },
    title:{
        textAlign: "center",
    },
}))

export default function AdminPanel(){
    const classes = useStyles()
    const dispatch = useDispatch()
    const users = useSelector(state=>state.user.data)

    useEffect(()=>{
        dispatch(getUsers())
        dispatch(getGrades())
        dispatch(getSubjects())
    },[dispatch])
    
    
    return(
        <div className={classes.root}>
            <Typography variant = "h5" className={classes.title}>Panel de Estudiante</Typography>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <UserData/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Courses/>
                </Grid>
            </Grid>
            
        </div>
    )
}