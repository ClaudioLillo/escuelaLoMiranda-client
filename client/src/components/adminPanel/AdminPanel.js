import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../../redux/actions/user'

import UsersTable from './UsersTable'
import Courses from './Courses'

const useStyles = makeStyles((theme)=>({
    root: {
        border: "1px solid rgb(0,0,0)",
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
    },[dispatch])
    if(users){
        console.log(users)
    }
    return(
        <div className={classes.root}>
            <Typography variant = "h5" className={classes.title}>Panel de Administrador</Typography>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <UsersTable users={users}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Courses/>
                </Grid>
            </Grid>
            
        </div>
    )
}