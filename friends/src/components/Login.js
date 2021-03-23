import e from "cors";
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

const initialState = {
    username: "",
    password: ""
}

const Login = () => {
    const [credentials, setCredentials] = useState(initialState);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = () => {
        e.preventDefault();
    }

    return (
    <>
    <form onSubmit={login}>
        <h3>Login</h3>
        <input
        placeholder="Username:"
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        />
        <input
        placeholder="Password:"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        />
        <button type="submit">Login</button>
    </form>
    </>
    );
}

export default Login;