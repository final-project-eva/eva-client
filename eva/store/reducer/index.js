
import { combineReducers } from 'redux'
import User from './user'
import Plan from './plan'
import Outcome from './outcome'

const rootReducers = combineReducers({
    User,
    Plan,
    Outcome
})

export default rootReducers
