import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();

    if(login === 'admin' && password === 'admin') {
        navigate('/admin')
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
