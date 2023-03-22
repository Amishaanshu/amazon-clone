import React, { useState } from "react";
import logo from "./logologin.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        Navigate("/");
      })
      .catch(error => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          Navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={logo} alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signinbutton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of{" "}
          <Link to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
            Use and Privacy Notice.
          </Link>
        </p>
        <button
          type="submit"
          onClick={register}
          className="login_registerbutton"
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
