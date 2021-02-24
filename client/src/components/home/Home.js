import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, Button, Grid, makeStyles, Hidden} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../utils/Logo'

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
}))

export default function Home(){
    const classes = useStyles()
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
                        <Button color="inherit" variant="outlined" className={classes.menuButton}>Material Educativo</Button>
                        <Button color="inherit" variant="outlined" className={classes.menuButton}>Ingresar</Button>
                        <Button color="inherit" variant="outlined" className={classes.menuButton}>Registrarse</Button>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item sm={2}>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                    </Grid>
                </Hidden>
              </Toolbar>
            </AppBar>
            </Grid>
        </div>
    )
}