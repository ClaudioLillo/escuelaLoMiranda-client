import axios from 'axios'
import Swal from 'sweetalert2'

export const seed = ()=>{
    return async function(){
        await axios({
            method: 'post',
            url: 'https://apilomiranda.herokuapp.com/seed'
        })
        .then(res=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

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

export const getCurrentUser = ()=>{
    return async function(dispatch){
        let id = localStorage.getItem('id')
        await axios({
            method: 'get',
            url: `https://apilomiranda.herokuapp.com/api/users/${id}`,
        }).then(res=>res.data)
        .then(data=>{
            dispatch({
                type: 'SAVE_CURRENT_USER',
                payload: data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const loginUser = (data)=>{
    return async function(dispatch){
        await axios({
            method: 'post',
            url: 'https://apilomiranda.herokuapp.com/api/login',
            data: data
        }).then(async(res)=>{
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id',res.data.userId)
            await Swal.fire({
                title: "Usuario verificado",
                timer: 3000})
            return res
        })
        .then(res=>{
            window.location.reload()
        })
        
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const updateUser = (data)=>{
    return async function(dispatch){
        await axios({
            method: 'put',
            url: 'https://apilomiranda.herokuapp.com/api/users',
            data: data
        }).then(async(res)=>{
            console.log(res)
            await Swal.fire({
                title: "Información actualizada",
                timer: 3000})
            return res
        })
        .then(res=>{
            window.location.reload()
        })
        
        .catch((err)=>{
            console.log(err)
        })
    }
}


