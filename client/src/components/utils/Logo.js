import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    root:{
        width: "100px",
        borderRadius: "50%",
        position: "absolute",
        top: "20px",
        border: "1px solid rgba(0,0,0,0.5)",
        backgroundColor: "rgba(200,200,200,1)",
    },
    img:{
        width: "100px",
        height: "100px",
    },
}))

export default function Logo(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <img className={classes.img} src="http://escuelalomiranda.cl/logo192.png" alt="logo"/>
        </div>
    )
}