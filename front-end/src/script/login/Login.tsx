import React, { useState } from "react";
import "../../css/login.css"; // Adjusted import path
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  function InputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function LoginHandler() {
    navigate(-1);
  }
  return (
    <div className="container">
      <div className="left">
        <div className="login-form">
          <h2>LOGIN</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">
                <span className="icon">👤</span> Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginForm.username}
                placeholder="Enter your username"
                onChange={(event) => InputHandler(event)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">
                <span className="icon">🔒</span> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginForm.password}
                placeholder="Enter your password"
                onChange={(event) => InputHandler(event)}
              />
            </div>
            <button
              type="submit"
              className="login-button"
              onClick={LoginHandler}
            >
              Login now
            </button>
            <button className="register-button">Register</button>
          </form>
        </div>
      </div>
      <div className="right">{/* Background image section */}</div>
    </div>
  );
};

export default Login;
