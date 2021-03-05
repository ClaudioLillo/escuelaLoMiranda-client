import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getCurrentUser} from '../../redux/actions/user'

export default function UserPanel(){
    const dispatch = useDispatch()
    const currentUser = useSelector(state=>state.data.currentUser)
    dispatch(getCurrentUser())
    return(
        <div>
            <h1>{currentUser && currentUser.name}</h1>
        </div>
    )
}