import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import MyBookingsCar from './Components/MyBookingsCar/MyBookingsCar.jsx';
import Login from './Page/Login.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Regester from './Page/Regester.jsx';
import { ToastContainer } from 'react-toastify';
import BrowsCar from './Page/BrowsCar.jsx';
import CarDetails from './Page/CarDetails.jsx';
import PrivetRout from './Context/PrivetRout.jsx';
import AddCar from './Page/AddCar.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {index:true ,path:"/",Component:Home},
      {
        path:"/MyBookings",
        Component:MyBookingsCar
      },
      {
        path:"/Login",
        Component:Login
      },
       {
        path:"/Regester",
        Component:Regester
      },{
        path:"/BrowsCar",
        Component:BrowsCar
      },
      {
        path:"/cardetails/:id",
        element:<PrivetRout>
          <CarDetails></CarDetails>
        </PrivetRout>,
        loader:({params})=>fetch(`http://localhost:3000/cars/${params.id}`)
          
        
      },
      {
        path:"/AddCar",
        Component:AddCar
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider   router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
