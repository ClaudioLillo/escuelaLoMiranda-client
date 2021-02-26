import { Button, FormControl, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../redux/actions/user'

const useStyles = makeStyles((theme)=>({
    root: {
        position: "relative",
    },
    paper: {
        width: "40%",
        marginTop: "150px",
        marginLeft: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title:{
        textAlign: "center",
    },
    input:{
        margin: "10px",
        width: "200px",
    },
    formActions:{
        display: "flex",
        flexDirection: "row",
    },
    button:{
        margin: "10px",
    },

}))

export default function Register(){
    const classes = useStyles()
    const history= useHistory()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({})

    const handleChange = (e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value})
    }
    
    const submit = ()=>{
        dispatch(registerUser(inputs))
    }
    const exit = ()=>{
        history.push("/")
    }
    if(inputs){
        console.log(inputs)
    }
    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.title}>Registro de Usuario</Typography>
                <FormControl className={classes.input} onChange={handleChange}>
                    <TextField
                        name="name"
                        variant="outlined"
                        label="Nombre"
                    ></TextField>
                </FormControl>
                <FormControl className={classes.input} onChange={handleChange}>
                    <TextField
                        name="lastName"
                        variant="outlined"
                        label="Apellido"
                    ></TextField>
                </FormControl>
                <FormControl className={classes.input} onChange={handleChange}>
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                    ></TextField>
                </FormControl>
                <FormControl className={classes.input} onChange={handleChange}>
                    <TextField
                        name="email"
                        type="password"
                        variant="outlined"
                        label="Contraseña"
                    ></TextField>
                </FormControl>
                <div className={classes.formActions}>
                <Button className={classes.button} onClick={exit} variant="outlined" color="secondary">Cancelar</Button>
                <Button className={classes.button} onClick={submit} variant="outlined" color="primary">Registrar</Button>
                </div>
                

               
            </Paper>
        </div>
    )
}