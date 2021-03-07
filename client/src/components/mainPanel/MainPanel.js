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
                <>
                {(currentUser.user.role==='admin') &&
                <AdminPanel/>}
                {(currentUser.user.role==='student') &&
                <StudentPanel/>}
                {(currentUser.user.role==='teacher') &&
                <TeacherPanel/>}
                </>}
       </div>
    )
}