export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN'
export const COMPLETE_LOGIN = 'COMPLETE_LOGIN'

export const attemptLogin = (username, password) => {
    const LoginInfo = {
        username, password
    }

    console.log(LoginInfo)
    return {
        type: ATTEMPT_LOGIN, LoginInfo
    }
}