import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import { NavBar } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavBar>
        <App />
      </NavBar>
    ),
  },
  {
    path: "contact",
    element: (
      <NavBar isContact={true}>
        <Contact />
      </NavBar>
    ),
  },
  {
    path: "register",
    element: (
      <NavBar>
        <Register />
      </NavBar>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
