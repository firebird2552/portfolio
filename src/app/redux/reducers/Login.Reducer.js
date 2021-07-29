import * as actions from '../actions/Login.actions'
import { initialState } from './Users.reducer'

const { Users } = initialState
export const Login = (state = Users, { type, LoginInfo }) => {
    switch (type) {
        case actions.ATTEMPT_LOGIN:
            console.log('Attempting to login with Login Info: ', LoginInfo)
            console.log('Attempting to login with username: ', LoginInfo.username)
            console.log('state', state)
            let user = state.find(user => user.username === LoginInfo.username)
            if (!user) return null
            console.log("Found User:", LoginInfo.username)
            return null


        case actions.COMPLETE_LOGIN:
            console.log('Completing login')

            break;

        default:
            return state
    }
}