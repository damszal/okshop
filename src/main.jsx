import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import SignIn from './pages/SignIn.jsx'
import SideCard from './components/card/SideCard.jsx'

import ErrorPage from "./error-page";



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { manManuLoader } from './components/MainNav.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    loader: manManuLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>,
        children: [
          {
            path: "/cart/:item",
            element: <SideCard />
          },
        ]
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
