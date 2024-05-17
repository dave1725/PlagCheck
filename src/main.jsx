import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from "./page/home.jsx";
import Tool from "./page/tool.jsx";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider,
  Route,
  Link,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />)
  },
  {
    path: "/home",
    element: (<Home />)
  },
  {
    path: "/tool",
    element: (<Tool />)
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
 
)
