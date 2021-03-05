import React, {useState} from 'react'
import { FormControl, Grid, Hidden, makeStyles, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography} from '@material-ui/core'
import {compareStrings} from '../utils/StringMethods'
import UserDetails from '../userDetails/UserDetails'
const useStyles=makeStyles((theme)=>({
    table: {
        backgroundColor: 'rgba(0,20,200,0.2)',
        marginTop: '10px',
    },
    titleCell: {
        fontWeight: '600',
    },
    title:{
        marginTop: '40px',
        fontWeight: '600',
    },
    formControl:{
        minWidth:100,
        maxWidth:120,
        marginRight: '16px',
        marginBottom: '16px',
    },
}))

export default function UsersTable({users}){
    const classes = useStyles()
    const [filter, setFilter] = useState({
        name:"",
        lastName:"",
        email:"",
        role:""
    })
    const handleChange = (e) =>{
        console.log(e.target.name)
        setFilter({...filter, [e.target.name]: e.target.value})
    }
    const applyFilter = (users)=>{
        let out = []
        if(filter){
            for (let i of users){
                let add = true
                for (let j in filter){
                    if( !(compareStrings(i[j], filter[j])) && filter[j]!==""){
                        add = false
                    } 
                }
                if(add){
                    out.push(i)
                }
            }
        }        
        return out
    }
    return(
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.title}>Usuarios</Typography>
            </Grid>
            <Grid item xs={6} md={2} lg={2} xl={1}>
                <FormControl onChange={handleChange} className={classes.formControl}>
                    <TextField
                        name="name"
                    label="Nombre"
                    value={filter.name}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6} md={2} lg={2} xl={1}>
                <FormControl onChange={handleChange} className={classes.formControl} >
                    <TextField
                        name="lastName"
                        label="Apellido"
                        value={filter.lastName}
                        />
                </FormControl>
            </Grid>
            <Grid item xs={6} md={2} lg={2} xl={1}>
                <FormControl onChange={handleChange} className={classes.formControl} >
                    <TextField
                        name="email"
                        label="Email"
                        value={filter.email}
                        />
                </FormControl>
            </Grid>
            <Grid item xs={6} md={2} lg={2} xl={1}>
                <FormControl className={classes.formControl}>
                    <Select onChange={handleChange}
                        name="role"
                        value={filter.role}
                        variant="outlined"
                        size="small"
                        label="Rol">
                        <MenuItem value="student">Estudiante</MenuItem>
                        <MenuItem value="teacher">Docente</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="">Todos</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        <Grid item xs={12}>
        <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                    <TableCell align='center' className={classes.titleCell}>Nombre</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Apellido</TableCell>
                    <Hidden smDown>
                    <TableCell align='center' className={classes.titleCell}>Email</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Rol</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Curso</TableCell>
                    </Hidden>
                    <TableCell align='center' className={classes.titleCell}>Detalles</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && applyFilter(users).map((user,index)=>
                        <TableRow key={index} hover className={classes.tablerow}>
                        <TableCell align='center'>{user.name}</TableCell>
                        <TableCell align='center'>{user.lastName}</TableCell>
                        <Hidden smDown>
                        <TableCell align='center'>{user.email}</TableCell>
                        <TableCell align='center'>{user.role}</TableCell>
                        <TableCell align='center'>{user.gradeId}</TableCell>
                        </Hidden>
                        <TableCell align="center"><UserDetails user={user}/></TableCell>
                    </TableRow>
                    )}
                    
                </TableBody>
            </Table>
            </Grid>
        </Grid>
    )
}