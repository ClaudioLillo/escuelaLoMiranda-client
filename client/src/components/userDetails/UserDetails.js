import { makeStyles, Button, Dialog, DialogActions, DialogTitle, DialogContent, Typography, Table, TableRow, TableCell, FormControl, Select, MenuItem, TableBody} from '@material-ui/core'
import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {updateUser} from '../../redux/actions/user'

const useStyles = makeStyles((theme)=>({
    title: {
        textAlign: 'center',
    },
}))


export default function UserDetails({user}){
    const classes = useStyles()
    const grades = useSelector(state=>state.grade.data)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState(user.gradeId?user:{...user, gradeId: ''})
    const [active, setActive] = useState(true)

    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }
    const handleChange = (e) =>{
        console.log(e.target.name)
        setInputs({...inputs, [e.target.name]: e.target.value})
        if(inputs.role === user.role && inputs.gradeId === user.gradeId){
            setActive(true)
        }
        else{
            setActive(false)
        }
    }
    const handleSubmit = (e)=>{
        dispatch(updateUser(inputs))
    }
    return(
        <div>
        <Button onClick={handleOpen} variant="outlined">Ver</Button>
        <Dialog open={open}>
            <DialogTitle>
                <Typography className={classes.title}>Detalles de Usuario</Typography>
            </DialogTitle>
            <DialogContent>
                <Table>
                    <TableBody>
                    <TableRow>
                        <TableCell>Usuario</TableCell><TableCell>{user.name+" "+user.lastName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email</TableCell><TableCell>{user.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Id</TableCell><TableCell>{user.id}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Rol</TableCell>
                        <TableCell>
                            <FormControl >
                                <Select
                                    onChange={handleChange}
                                    name="role"
                                    value={inputs.role}
                                    variant="outlined">
                                    <MenuItem value={"student"}>Estudiante</MenuItem>
                                    <MenuItem value={"teacher"}>Docente</MenuItem>
                                    <MenuItem value={"admin"}>Administrador</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Curso</TableCell>
                        <TableCell>
                            <FormControl >
                                <Select
                                    onChange={handleChange}
                                    name="gradeId"
                                    value={inputs.gradeId}
                                    variant="outlined">
                                     {grades && grades.map((grade, index)=>
                                    <MenuItem key={index} value={grade.id}>{grade.level+"°"+grade.letter}</MenuItem>
                                    )}
                                    <MenuItem value={''}>Sin asignar</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary" variant="outlined">Cerrar</Button>
                <Button  onClick={handleSubmit} disabled={active} variant="outlined" color="primary">Guardar Cambios</Button>
            </DialogActions>

        </Dialog>
        </div>
    )
    
}