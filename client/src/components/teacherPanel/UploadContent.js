import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'

import './TeacherPanel.css'
import { MenuItem, Select, InputLabel } from '@material-ui/core'

export default function UploadContent(){
    const [files, setFiles] = useState([])
    const courses = useSelector(state=>state.course.data)
    const user = useSelector(state=>state.currentUser.data.user)
    const [courseId, setCourseId] = useState('')
    const subjects = useSelector(state=>state.subject.data)
    const grades = useSelector(state=>state.grade.data)

    const handleChange=(e)=>{
        setFiles(e.target.files)
    }
    const handleCourseId=(e)=>{
        setCourseId(e.target.value)
    }
    if(user){
        console.log("user: ", user)
    }
    if(courses){
        console.log(courses)
    }
    const handleSubmit=(e)=>{
        const formData = new FormData()
        for( let i of files){
            formData.append("files", i)
        }
        axios({
            method: 'POST',
            url: 'https://apilomiranda.herokuapp.com/api/uploads',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res=>{
            console.log(res.data.files) //arreglo de files
            axios({
                method: 'POST',
                url: 'https://apilomiranda.herokuapp.com/api/files',
                data: {filename: res.data.files, courseId: courseId, userId: user.id}
            })
            .then(res=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    const subjectOf = (sId)=>{
        console.log("sId:",sId)
        for( let i of subjects){
            if(i.id === sId){
                return i.name
            }
        }
        return ""
    }

    const gradeOf = (gId)=>{
        console.log("gId:",gId)
        for( let i of grades){
            if(i.id === gId){
                return i.level + " " + i.letter
            }
        }
        return ""
    }
    if(courses){
        console.log("courses: ", courses)
    }
    if(subjects){
        console.log("subjects: ", subjects)
    }
    return(
        <div className="upload-content">
            <h2 className="upload-content-title">Subir Material</h2>
            <form className="upload-form">
                <InputLabel htmlFor="course">Clase</InputLabel>
                <Select
                    label="Clase"
                    variant="outlined"
                    className="upload-select"
                    value={courseId}
                    id="course"
                    onChange={handleCourseId}>
                    {(courses && subjects && grades) && courses.map((course,index)=>
                    <MenuItem key={index} value={course.id}>{subjectOf(course.subjectId)+ " "+ gradeOf(course.gradeId)}</MenuItem>)}
                </Select>
                <br/>
                <input
                    className="input-hidden"
                    type="file"
                    id="content"
                    accept=".doc,.docx,.pdf"
                    multiple={true}
                    onChange={handleChange}/>
                <label className="file-input-label" htmlFor="content">Escoger Archivos (pdf y word)</label>
            </form>
            <button className="submit-button" onClick={handleSubmit}>Subir</button>
        </div>
    )
}