import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
    credentials: {
        username: "",
        password: ""
    },
    error: ""
}

const Login = () => {
    const [credentials, setCredentials] = useState(initialState.credentials);
    const [error, setError] = useState(initialState.error);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        setError(initialState.error);
    }

    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", credentials)
            .then(res => {
                localStorage.setItem(res.data.payload);
            })
            .catch(err => {
                setError(err.response.data.error);
            })
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
        {error && <p style={{color: "red"}}>{error}</p>}
    </form>
    </>
    );
}

export default Login;