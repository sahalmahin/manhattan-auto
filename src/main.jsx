import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home';
import Login from './components/Login';
import Root from './components/Root';
import AddProduct from './components/AddProduct';
import UpdateCar from './components/UpdateCar';
import MyCart from './components/MyCart';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import Brand from './components/Brand';
import SingleCar from './components/SingleCar';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://reset-assignment-10-server.vercel.app/car')
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://reset-assignment-10-server.vercel.app/car')
      },
      {
        path: '/brand/:id',
        element: <Brand></Brand>,
        loader: () => fetch('https://reset-assignment-10-server.vercel.app/car')
      },
      {
        path: '/singleCar/:id',
        element: <PrivateRoute><SingleCar></SingleCar></PrivateRoute>,
        loader: ({ params }) => fetch(`https://reset-assignment-10-server.vercel.app/car/${params.id}`)
      },
      {
        path: '/updateCar',
        element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
        loader: () => fetch('https://reset-assignment-10-server.vercel.app/car')
      },
      {
        path: '/updateCar/:id',
        element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
        loader: ({ params }) => fetch(`https://reset-assignment-10-server.vercel.app/car/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
