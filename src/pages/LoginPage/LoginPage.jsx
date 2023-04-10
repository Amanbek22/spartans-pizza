import React from "react";
import { useState } from "react";
import Button from "../../components/button/Button";

function LoginPage( { setAuth } ) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if(login === 'admin' && password === 'admin') {
        setAuth(true)
    } else {
        alert("Login или Password были введены не коректно!")
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <label>
          <div>Login</div>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            type="text"
            placeholder="Login"
          />
        </label>
        <label>
          <div>Password</div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
          />
        </label>
        <br />
        <br />
        <Button title={"Enter"} />
      </form>
    </div>
  );
}

export default LoginPage;
