import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.success("🦄 Wow so easy!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

function llogin() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { name, password })
      .then((result) => {
        console.log(result);

        if (result.data === "success") {
          // navigate("./singup.jsx");
          toast.success("Login successful!", { autoClose: 5000 });
        } else if (result.data === "error") {
          toast.error("Login Failed. Please Check The Password.");
        } else {
          toast.error("Login failed. No record existed.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mainx">
      <div className="formx">
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
              type="password"
              autoComplete="off"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />

          <Button onClick={handleSubmit} variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <Button variant="primary" type="login">
          Sing-up
        </Button>
      </div>
    </div>
  );
}

export default llogin;
