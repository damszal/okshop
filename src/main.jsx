import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import SignIn from './pages/SignIn.jsx'

// import Header from './components/Header.jsx';
import ErrorPage from "./error-page";

import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import categories from './data/categories.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home cat = {categories}/> ,
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
