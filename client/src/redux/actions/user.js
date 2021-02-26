import axios from 'axios'

export const registerUser = ()=>{
    return async function(data){
        console.log("en la función")
        await axios({
            method: 'post',
            url: 'https://apilomiranda.herokuapp.com/api/users',
            data: data
        }).then(res=>console.log(res))
    }
}