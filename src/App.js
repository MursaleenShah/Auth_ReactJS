import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Singup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
