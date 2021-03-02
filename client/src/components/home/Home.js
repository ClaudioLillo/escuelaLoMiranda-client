import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, Button, Grid, makeStyles, Hidden, Drawer, ListItem, ListItemText, ListItemIcon, List, Divider} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../utils/Logo'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        position: "absolute",
        zIndex: 500,
    },
    menuButton: {
        marginLeft: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        marginLeft: "120px",
    },
    listItem:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        '&:hover':{
            backgroundColor: 'black',
            cursor: 'pointer',
        },
    },
    icon:{
        color: 'white',
    },
}))

const links = ['Gato', 'Perro', 'Ciervo']

export default function Home(){
    const classes = useStyles()
    const history = useHistory()
    const [open, setOpen] = useState(false)

    const goTo = (e)=>{
        let destination = e.target.offsetParent.id
        history.push("/"+destination)
        setOpen(false)
    }
    const handleOpen = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }
    return(
        <div className={classes.root}>
            <Grid container>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Logo/>
                <Grid item xs={8} sm={8} md={5} lg={3} xl={3}>
                <Typography variant="h5" className={classes.title}>
                  Escuela de Lo Miranda
                </Typography>
                </Grid>
                <Hidden smDown>
                    <Grid item sm={6} md={7}>
                        <Button id="contents" onClick = {goTo} color="inherit" className={classes.menuButton}>Material Educativo </Button>
                        <Button id="login" onClick = {goTo} color="inherit"  className={classes.menuButton}>Ingresar </Button>
                        <Button  id="register" onClick = {goTo} color="inherit" className={classes.menuButton}>Registrarse </Button>
                        <Button id="admin" onClick = {goTo} color="inherit"  className={classes.menuButton}>Admin </Button>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item sm={2}>
                        <IconButton  onClick={handleOpen} edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                    </Grid>
                </Hidden>
              </Toolbar>
            </AppBar>
            </Grid>
            <Drawer anchor="right" open={open} >
                <List>
                <ListItem id="contents" onClick = {goTo} className={classes.listItem}>
                    <ListItemText  primary="Material Educativo"/>
                </ListItem>
                <ListItem id="login" onClick = {goTo} className={classes.listItem}>
                    <ListItemText primary="Ingresar"/>
                </ListItem>
                <ListItem id="register" onClick = {goTo} className={classes.listItem}>
                    <ListItemText primary="Registrarse"/>
                </ListItem>
                <ListItem id="admin" onClick = {goTo} className={classes.listItem}>
                    <ListItemText primary="Admin"/>
                </ListItem>
                <Divider/>
                <ListItem className={classes.listItem} onClick={handleClose}>
                    <ListItemIcon>
                        <ArrowBackIcon className={classes.icon}/>
                    </ListItemIcon>
                </ListItem>
                </List>
            </Drawer>
        </div>
    )
}