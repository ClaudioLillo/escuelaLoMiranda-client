import { Typography, Paper, makeStyles } from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import {ToCamelCase} from '../utils/StringMethods'

const useStyles = makeStyles((theme)=>({
    paper: {
        padding: "16px",
    },
}))

export default function Courses(){
    const classes = useStyles()
    const user = useSelector(state=>state.currentUser.data.user)
    if(user){
        console.log(user)
    }
    return(
        <div>
            <Paper className={classes.paper} elevation={3}>
            {user &&
                <>   
                <Typography>{ToCamelCase(user.name+" "+user.lastName)}</Typography>
                <Typography>{user.email}</Typography>
                <Typography>{user.gradeId}</Typography>
                </>}
            </Paper>
            
        </div>
    )
}