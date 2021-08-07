import auth0 from 'auth0-js';

const REDIRCET_ON_LOGIN = "redirect_on_login"

let _idToken = null;
let _accessToken = null;
let _scopes = null;
let _expiresAt = null;

export default class Auth {

    constructor(history) {
        this.history = history
        this.userProfile = null
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENTID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
            audience: process.env.REACT_APP_AUT0_AUDIENCE,
            responseType: 'token id_token',
            scope: "openid profile email",
        })
    }

    login = () => {
        localStorage.setItem(REDIRCET_ON_LOGIN, JSON.stringify(this.history.location))
        console.log("Logging in")
        this.auth0.authorize()
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log(authResult)
                this.setSession(authResult)
                const redirectLocation = localStorage.getItem(REDIRCET_ON_LOGIN) === "undefined" ?
                    "/" :
                    JSON.parse(localStorage.getItem(REDIRCET_ON_LOGIN));
                this.history.push(redirectLocation)
            } else if (err) {
                this.history.push("/")
                alert(`Error: ${err.error}. Check the console for further details`)
                console.log(err)
            }
            localStorage.removeItem(REDIRCET_ON_LOGIN)
        })
    }

    setSession = authResult => {
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
        localStorage.setItem("access_token", authResult.accessToken)
        localStorage.setItem("id_token", authResult.idToken)
        localStorage.setItem("expires_at", expiresAt)
    }

    isAuthenticated = () => {
        const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt
    }

    logout = () => {
        console.log("Logging out")
        localStorage.removeItem("access_token")
        localStorage.removeItem("id_token")
        localStorage.removeItem("expires_at")
        this.userProfile = null
        this.auth0.logout({
            clientID: process.env.REACT_APP_AUTH0_CLIENTID,
            returnTo: "http://localhost:8080"
        })
    }

    getAccessToken = () => {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
            throw new Error("No access token found")
        }
        return accessToken
    }

    getProfile = (cb) => {
        if (this.userProfile) return cb(this.userProfie);
        this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
            if (profile) this.userProfile = profile;
            cb(profile, err)
        })
    }
}