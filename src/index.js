import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Notfound from "./pages/404";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Notfound />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "articles", element: <Articles /> },
            { path: "contact", element: <Contact /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
