import {combineReducers} from 'redux'

import user from './user'
import grade from './grade'
import subject from './subject'
import currentUser from './currentUser'
import course from './course'



const rootReducer = combineReducers({
    user,
    grade,
    subject,
    currentUser,
    course
})

export default rootReducer