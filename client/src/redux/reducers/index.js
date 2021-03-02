import {combineReducers} from 'redux'

import user from './user'
import grade from './grade'
import subject from './subject'



const rootReducer = combineReducers({
    user,
    grade,
    subject
})

export default rootReducer