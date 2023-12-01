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
import MyCart from './components/MyCart';
import DetailPage from './components/DetailPage';
import CarDetail from './components/CarDetail';
import UpdateCar from './components/UpdateCar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/car')
      },
      {
        path: '/detailPage/:id',
        element: <DetailPage></DetailPage>
      },
      {
        path: '/carDetail/:id',
        element: <CarDetail></CarDetail>
      },
      {
        path: '/updateCar/:id',
        element: <UpdateCar></UpdateCar>,
        loader: ({params})=>fetch(`http://localhost:5000/car/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
