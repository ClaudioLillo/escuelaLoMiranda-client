import React from 'react'
import {useSelector} from 'react-redux'
import './StudentPanel.css'


export default function Courses(){
    const user = useSelector(state=>state.currentUser.data.user)
    const grades = useSelector(state=>state.grade.data)
    if(user){
        console.log(user)
    }

    const findGrade = (gradeId) =>{
        for(let i of grades){
            if(i.id===gradeId){
                return i.level+"° "+i.letter
            }
        }
        return ""
    }

    return(
        <div className="root">
            {(user && grades) &&
                <>   
                <h3 className="title">{(user.name+" "+user.lastName)}</h3>
                <p className="data">{user.email}</p>
                <p className="data">{findGrade(user.gradeId)}</p>
                </>}
        </div>
    )
}