import axios from 'axios'

export const registerUser = (data)=>{
    return async function(){
        console.log("en la función")
        console.log("data: ", data)
        await axios({
            method: 'post',
            url: 'https://apilomiranda.herokuapp.com/api/users',
            data: data,
        }).then(res=>console.log(res))
    }
}

export const getUsers = ()=>{
    return async function(dispatch){
        await axios({
            method: 'get',
            url: 'https://apilomiranda.herokuapp.com/api/users',
        }).then(res=>res.data)
        .then(data=>{
            dispatch({
                type: 'SAVE_USERS',
                payload: data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}