import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../../redux/actions/user'
import {getGrades} from '../../redux/actions/grade'
import {getSubjects} from '../../redux/actions/subject'

import UsersTable from './UsersTable'
import Grades from './Grades'
import Subjects from './Subjects'
import Courses from './Courses'

const useStyles = makeStyles((theme)=>({
    root: {
        border: "1px solid rgba(0,0,0,0)",
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
    
    const onlyTeachers = () =>{
        let arr = []
        for( let i of users){
            if(i.role==="teacher"){
                arr.push(i)
            }
        }
        return(arr)
    }
    return(
        <div className={classes.root}>
            <Typography variant = "h5" className={classes.title}>Panel de Administrador</Typography>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <UsersTable users={users}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Grades/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Subjects/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {users && <Courses teachers={onlyTeachers()}/>}
                </Grid>
            </Grid>
            
        </div>
    )
}