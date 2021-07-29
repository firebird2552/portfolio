
import { BlogPosts } from './BlogPost.reducer'
import { Users } from './Users.reducer'
import { Projects } from './Projects.Reducer'
import { Proficiencies } from './Proficiency.reducer'
import { Login } from './Login.Reducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({ BlogPosts, Users, Projects, Proficiencies, Login })


export default RootReducer