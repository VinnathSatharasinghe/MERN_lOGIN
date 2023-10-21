import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./main.css"; 

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Navbar from "./Navbar"
import Home from "./Home.jsx";
import Login from "./Login/Login"
import Singup from "./singup"


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/gg",
    element: <Login />,
  },
  {
    path: "/sing",
    element: <Singup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router} />

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);

reportWebVitals();
