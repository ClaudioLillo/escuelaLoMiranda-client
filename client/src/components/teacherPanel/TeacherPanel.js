import React from 'react'
import './TeacherPanel.css'

import TeacherData from './TeacherData'
import UploadContent from './UploadContent'
import { Grid } from '@material-ui/core'

export default function TeacherPanel(){
    return(
        <Grid container>
        <div className="tpanel">
            
                <Grid item xs={12}>
                    <h1 className="tpanel-title">Panel de Administración Docente</h1>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <TeacherData/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <UploadContent/>
                </Grid>
        </div>
        </Grid>
    )
}