import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/Login.css";

import { attemptLogin } from "../redux/actions/Login.actions";

export const Login = (props) => {
  console.log(props);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const HandleOnSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      setUsernameError("Username is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }

    if (username && password) {
      props.dispatch(attemptLogin(username, password));
    }
    console.log("Username: ", username, "Passowrd:", password);
  };

  const HandleOnClear = (event) => {
    event.preventDefault();
    setPassword("");
    setPasswordError("");
    setUsername("");
    setUsernameError("");
  };
  return (
    <form className="LoginForm" onSubmit={(e) => HandleOnSubmit(e)}>
      <header>
        <h1>Login</h1>
      </header>
      <section className="usernameSection">
        <label htmlFor="usernameTextBox">Username: </label>
        <input
          type="username"
          name="usernameTextBox"
          id="usernameTextBox"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {usernameError ? <sub className="error">{usernameError}</sub> : null}
      </section>
      <section className="passwordSection">
        <label htmlFor="passwordTextBox">Password: </label>
        <input
          type="password"
          name="passwordTextBox"
          id="passwordTextBox"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {passwordError ? <sub className="error">{passwordError}</sub> : null}
      </section>
      <section className="LoginButtonBar">
        <section className="LoginSubmit">
          <button onClick={(e) => HandleOnSubmit(e)}>Submit</button>
        </section>
        <section className="LoginClear">
          <button
            href=""
            onClick={(e) => {
              HandleOnClear(e);
            }}
          >
            Clear
          </button>
        </section>
      </section>
    </form>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Login);
