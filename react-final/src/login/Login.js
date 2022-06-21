import React from "react";
import '../App.css';
import LoginForm from "./LoginForm";
import Logout from "./Logout";

const Login=()=>{

    let loginOk=localStorage.loginOk;


    return (
        <div>
            {
                loginOk==null?<LoginForm/>:<Logout/>
            }
        </div>
    )
}

export default Login;