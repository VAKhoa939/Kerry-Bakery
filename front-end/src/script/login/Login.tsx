import React from "react";
import "../../css/login.css"; // Adjusted import path

const Login = () => {
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
                placeholder="Enter your username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">
                <span className="icon">🔒</span> Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="login-button">
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