import React from 'react'
import {useSelector} from 'react-redux'
import './StudentPanel.css'

export default function Courses(){
    const user = useSelector(state=>state.currentUser.data.user)
    const grades = useSelector(state=>state.grade.data)
    const courses = useSelector(state=>state.course.data)

    if(user && grades && courses){
        console.log("gradeId: ",user.gradeId)
        console.log(grades)
        console.log(courses)
    }
    const userCourses = ()=>{
        let out=[]
        let id = user.gradeId
        for(let i of courses){
            if(i.gradeId===id){
                out.push(i)
            }
        }
        return out
    }
    return(
        <div className="root">
            <h2 className="title">Cursos inscritos</h2>
            <table>
                <thead>
                    <tr>
                        <td className="table-cell">Id</td>
                        <td className="table-cell">Profesor</td>
                        <td className="table-cell">Detalles</td>
                    </tr>
                </thead>
                <tbody>
                    {(user && courses) && userCourses().map((course, index)=>
                    <tr key={index}>
                    <td className="table-cell">{course.id}</td>
                    <td className="table-cell">{course.teacher}</td>
                    <td className="table-cell">-</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}