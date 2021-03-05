import axios from 'axios'

export const createCourse = (data)=>{
    return async function(){
        await axios({
            method: 'post',
            url: 'https://apilomiranda.herokuapp.com/api/courses',
            data: data,
        }).then(res=>console.log(res))
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