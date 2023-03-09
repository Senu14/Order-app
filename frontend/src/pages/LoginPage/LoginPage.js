import React, { useState } from "react";
import "./LoginPage.scss";
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsernameError("");
        setPasswordError("");

        if (username === "") {
            setUsernameError("The email is required");
        }

        if (password === "") {
            setPasswordError("The password is required.");
        }

        // Si los campos son válidos, puedes enviar el formulario aquí.
    };

    return (
        <>
            <style>{'body {  background-color: #F4E9D6 }'}</style>
            <h1 style={{textAlign: "center"}} className="txt">You are welcome!</h1>
            <img src="/images/logo.png" alt="Logo" className="img"/>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label htmlFor="username">Email:</label> */}
                    <input
                    placeholder="Email"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    {usernameError && <span style={{ color: "red" }}>{usernameError}</span>}
                </div>

                <div>
                    {/* <label htmlFor="password">Password:</label> */}
                    <input placeholder="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
                </div>

                <button type="submit">Login</button>

                <button className="register-button" type="submit">Register</button>
            </form>
        </>
    );
};

export default LoginPage;