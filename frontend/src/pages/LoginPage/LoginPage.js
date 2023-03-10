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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (username === "") {
            setUsernameError("The email is required");
        } else if (!emailRegex.test(username)) {
            setUsernameError("Invalid email format");
        }

        if (password === "") {
            setPasswordError("The password is required.");
        }

        // Si los campos son válidos, puedes enviar el formulario aquí.
    };

    return (
        <>
            <style>{'body {  background-color: #F4E9D6 }'}</style>
            <h1 classname="logintext" style={{ textAlign: "center" }} className="txt">You are welcome!</h1>
            <img src="/images/logo.png" alt="Logo" className="img" />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Email:</label>
                    <div className="input-container">
                        <input className="log-input"
                            placeholder="Email"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        {usernameError && <span className="error">{usernameError}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <div className="input-container">
                        <input className="log-input"
                            placeholder="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {passwordError && <span className="error">{passwordError}</span>}
                    </div>
                </div>

                <button classname="login-buton" type="submit">Login</button>

                <p className="register-txt">I do not have account</p>
                <button className="register-button" type="submit">Register</button>
            </form>
        </>
    );
};

export default LoginPage;