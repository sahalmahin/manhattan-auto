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
import DetailPage from './components/DetailPage';
import CarDetail from './components/CarDetail';
import UpdateCar from './components/UpdateCar';
import MyCart from './components/MyCart';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/car')
      },
      {
        path: '/detailPage/:id',
        element: <DetailPage></DetailPage>
      },
      {
        path: '/carDetail/:id',
        element: <PrivateRoute><CarDetail></CarDetail></PrivateRoute>,
        loader: () => fetch('http://localhost:5173/carDetail')
      },
      {
        path: '/updateCar',
        element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/car')
      },
      {
        path: '/updateCar/:id',
        element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`)
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
