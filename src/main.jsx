import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import SignIn from './pages/SignIn.jsx'

// import Header from './components/Header.jsx';
import ErrorPage from "./error-page";

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home /> ,
      },
      {
        path: '/signin',
        element: <SignIn /> ,
      },
      {
        path: '/login',
        element: <Login /> ,
      },
      {
        path: '/about',
        element: <About /> ,
      },
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
