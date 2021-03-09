import axios from 'axios'
import Swal from 'sweetalert2'

export const createCourse = (data)=>{
    return async function(){
        console.log("data to create course: ",data)
        await axios({
            method: 'post',
            url: 'https://apilomiranda.herokuapp.com/api/courses',
            data: data,
        }).then(async(res)=>{
            console.log(res)
            await Swal.fire({
                title: "Clase agregada",
                timer: 3000})
            return res
        })
        .then(res=>{
            window.location.reload()
        })
    }
}

export const getCourses = ()=>{
    return async function(dispatch){
        await axios({
            method: 'get',
            url: 'https://apilomiranda.herokuapp.com/api/courses',
        }).then(res=>res.data)
        .then(data=>{
            dispatch({
                type: 'SAVE_COURSES',
                payload: data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}