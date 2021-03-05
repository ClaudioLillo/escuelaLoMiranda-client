import { Button, FormControl, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {loginUser, getCurrentUser} from '../../redux/actions/user'

const useStyles = makeStyles((theme)=>({
    root: {
        position: "relative",
    },
    paper: {
        margin: "10px",
        marginTop: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
    },
    title:{
        textAlign: "center",
        fontSize: "20px",
        margin: "20px",
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

export default function Login(){
    const classes = useStyles()
    const history= useHistory()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({})

    const handleChange = (e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value})
    }
    
    const submit = async()=>{
        dispatch(loginUser(inputs))
        dispatch(getCurrentUser())
        history.push("/panel")
    }
    const exit = ()=>{
        history.push("/")
    }

    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h6" className={classes.title}>Ingreso de usuario</Typography>
                <FormControl className={classes.input} onChange={handleChange}>
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                    ></TextField>
                </FormControl>
                <FormControl className={classes.input} onChange={handleChange}>
                    <TextField
                        name="password"
                        type="password"
                        variant="outlined"
                        label="Contraseña"
                    ></TextField>
                </FormControl>
                <div className={classes.formActions}>
                <Button className={classes.button} onClick={exit} variant="outlined" color="secondary">Cancelar</Button>
                <Button className={classes.button} onClick={submit} variant="outlined" color="primary">Ingresar</Button>
                </div>
            </Paper>
            </Grid>
            </Grid>
        </div>
    )
}