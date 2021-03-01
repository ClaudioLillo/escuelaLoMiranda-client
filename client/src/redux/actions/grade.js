import axios from 'axios'

export const createGrade = (data)=>{
    return async function(){
        console.log("data to send: ",data)
        await axios({
            method: 'post',
            url: 'https://apilomiranda.herokuapp.com/api/grades',
            data: data,
        }).then(res=>console.log(res))
    }
}

export const getGrades = ()=>{
    return async function(dispatch){
        await axios({
            method: 'get',
            url: 'https://apilomiranda.herokuapp.com/api/grades',
        }).then(res=>res.data)
        .then(data=>{
            dispatch({
                type: 'SAVE_GRADES',
                payload: data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}