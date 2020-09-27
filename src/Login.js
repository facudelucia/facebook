import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase"
import { useStateValue } from './StateProvider'
function Login() {
    const[{user}, dispatch] = useStateValue()
    const handleClick = () => {
        auth.signInWithPopup(provider)
            .then(result=>{
                dispatch({
                    type: "SET_USER",
                    user: result.user
                })
            })
            .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
            </div>
            <Button type="submit" onClick={handleClick}>
                Sign in
            </Button>
        </div>
    )
}

export default Login
