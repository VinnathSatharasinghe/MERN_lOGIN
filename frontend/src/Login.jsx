import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { name, password })
      .then((result) => {
        console.log(result);
        if(result.data === "Success") {
          navigate("./Home.jsx");
        }
       
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <br />
          <input
            type="text"
            placeholder="Username"
            autoComplete="off "
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <br />
        <br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <br />
          <input
            type="Password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Link to="/frontend/src/singup.jsx" variant="primary" type="login">
        Sing-up
      </Link>
    </div>
  );
}

export default Login;
