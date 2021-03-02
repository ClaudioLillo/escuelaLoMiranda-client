import React, {useState} from 'react'
import { FormControl, makeStyles, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography} from '@material-ui/core'
import {compareStrings} from '../utils/StringMethods'
const useStyles=makeStyles((theme)=>({
    table: {
        backgroundColor: 'rgba(0,20,200,0.2)',
        width: '40%',
        marginTop: '10px',
    },
    titleCell: {
        fontWeight: '600',
    },
    title:{
        marginTop: '40px',
        fontWeight: '600',
    },
    tablerow:{
        "&:hover":{
            cursor: 'pointer',
        },
    },
    formControl:{
        maxWidth:80,
        marginRight: '8px',
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
                    console.log(i[j])
                    console.log(filter[j])
                    console.log(compareStrings(i[j],filter[j]))
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
    if(filter){
        console.log(filter)
    }
    return(
        <>
        <Typography className={classes.title}>Usuarios</Typography>
        <FormControl onChange={handleChange} className={classes.formControl}>
            <TextField
                name="name"
                label="Nombre"
                value={filter.name}
                />
        </FormControl>
        <FormControl onChange={handleChange} className={classes.formControl} >
            <TextField
                name="lastName"
                label="Apellido"
                value={filter.lastName}
                />
        </FormControl>
        <FormControl onChange={handleChange} className={classes.formControl} >
            <TextField
                name="email"
                label="Email"
                value={filter.email}
                />
        </FormControl>
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
        <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                    <TableCell align='center' className={classes.titleCell}>Nombre</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Apellido</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Email</TableCell>
                    <TableCell align='center' className={classes.titleCell}>Rol</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && applyFilter(users).map((user,index)=>
                        <TableRow key={index} hover className={classes.tablerow}>
                        <TableCell align='center'>{user.name}</TableCell>
                        <TableCell align='center'>{user.lastName}</TableCell>
                        <TableCell align='center'>{user.email}</TableCell>
                        <TableCell align='center'>{user.role}</TableCell>
                    </TableRow>
                    )}
                    
                </TableBody>
            </Table>
        </>
    )
}