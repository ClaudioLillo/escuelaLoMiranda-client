import axios from 'axios'
import Swal from 'sweetalert2'

export const createSubject = (data)=>{
    return async function(){
        console.log("data to send: ",data)
        await axios({
            method: 'post',
            url: 'https://apilomiranda.herokuapp.com/api/subjects',
            data: data,
        }).then(async(res)=>{
            console.log(res)
            await Swal.fire({
                title: "Asignatura creada",
                timer: 3000})
        }).then(res=>window.location.reload())
    }
}

export const getSubjects = ()=>{
    return async function(dispatch){
        await axios({
            method: 'get',
            url: 'https://apilomiranda.herokuapp.com/api/subjects',
        }).then(res=>res.data)
        .then(data=>{
            dispatch({
                type: 'SAVE_SUBJECTS',
                payload: data
            })
            return data
        })
      
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const deleteSubject = (data) =>{
    return async function(dispatch){
        await axios({
            method: 'delete',
            url: 'https://apilomiranda.herokuapp.com/api/subjects',
            data: data
        })
        .then(async(res)=>{
            console.log(res.status)
            await Swal.fire({
                title: "Asignatura eliminada",
                timer: 3000
            })
            return res
        })    
        .then(res=> window.location.reload())
           
        
    }
}
     