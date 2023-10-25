import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./main.css"; 

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Navbar from "./Navbar"
import Home from "./Home/Home";
import Login from "./Login/Login"
import Singup from "./singup"
import All from "./CRUD/All"


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
  {
    path: "/curd",
    element: <All />,
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
