import React from 'react'
import {useSelector} from 'react-redux'

export default function TeacherData(){
    const teacher = useSelector(state=>state.currentUser.data.user)
    if(teacher){
        console.log(teacher)
    }
    return(
        <div className="tdata">
            {teacher &&
            <div>
            <p className="tdata-title">Información Personal</p>
            <p className="tdata-info-cap">{"Nombre : "+teacher.name+" "+teacher.lastName} </p>
            <p className="tdata-info">{"Email : "+teacher.email}</p>
            </div>}
        </div>
    )
}