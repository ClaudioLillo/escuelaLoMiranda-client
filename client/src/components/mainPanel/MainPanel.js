import { Grid } from '@material-ui/core'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getCurrentUser} from '../../redux/actions/user'
import AdminPanel from '../adminPanel/AdminPanel'
import StudentPanel from '../studentPanel/StudentPanel'
import TeacherPanel from '../teacherPanel/TeacherPanel'

export default function MainPanel(){
    const dispatch = useDispatch()
    const currentUser = useSelector(state=>state.currentUser.data)

    useEffect(()=>{
        dispatch(getCurrentUser())
    }, [dispatch])

 
    return(
       <div>
            {currentUser &&
                <Grid container>
                {(currentUser.user.role==='admin') &&
                <Grid item xs={12}><AdminPanel/></Grid>}
                {(currentUser.user.role==='student') &&
                <StudentPanel/>}
                {(currentUser.user.role==='teacher') &&
                <Grid item xs={12}><TeacherPanel/></Grid>}
                </Grid>}
       </div>
    )
}