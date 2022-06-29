import React, { useState } from "react";

import '../../styles/LoginPage.css'

import { useDispatch } from "react-redux";
import { login } from "./PageSlicers/LoginPageSlice";
import { useSelector } from "react-redux";


import { Link } from "react-router-dom";


const LoginPage = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChangeName = (e) => {
        setName(e.currentTarget.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.currentTarget.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        /* e.preventDefault(); */

        dispatch(login(name, email))
        setName("");
        setEmail("");
        setPassword("");
        
    }

    const userInfo = useSelector((state) => state.userInfo)

    console.log(userInfo)
    return (

       
        <div className="container">

            <h1 className="login-h1"> Welcome to Gardrop App </h1>



            <div className="login-form">
                <form /* onSubmit={handleSubmit} */ id="login-form">

                    <div className="name-div">
                        <label className="login-name" >Username:</label>
                        <input className="login-name" type={"text"} placeholder="Your Name" value={name} onChange={handleChangeName}></input>
                    </div>

                    <div className="email-div">
                        <label className="login-email">E-mail:</label>
                        <input className="login-email" type={"text"} placeholder="Your Email" value={email} onChange={handleChangeEmail}></input>
                    </div>

                    <div className="password-div">
                        <label className="login-password">Password:</label>
                        <input className="login-password" type={"password"} placeholder="Your Password" value={password} onChange={handleChangePassword}></input>
                    </div>
                    <Link to="/main-menu">
                        <button className="login-button" type="submit"  onClick={handleSubmit} >Login</button>
                    </Link>
                </form>
            </div>

           
        </div>

    );
};

export default LoginPage;