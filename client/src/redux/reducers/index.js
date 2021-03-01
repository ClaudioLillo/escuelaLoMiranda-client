import {combineReducers} from 'redux'

import user from './user'
import grade from './grade'



const rootReducer = combineReducers({
    user,
    grade,
})

export default rootReducer