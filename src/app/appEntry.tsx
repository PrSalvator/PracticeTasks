import { RouterProvider } from "react-router-dom"
import { router } from "./routing"
import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)