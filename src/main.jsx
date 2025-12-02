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
import MyListings from './Page/MyListings.jsx';
import Error from './Page/Error.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {index:true ,Component:Home},
      {
        path:"/*",
        element: <Error></Error>
      },
      {
        path:"/MyBookings",
        element:<PrivetRout>
          <MyBookingsCar></MyBookingsCar>
        </PrivetRout>,
        errorElement:<Error></Error>
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
        loader:({params})=>fetch(`https://my-assignment10-server.vercel.app/cars/${params.id}`)
          
        
      },
      {
        path:"/AddCar",
        element: <PrivetRout>
          <AddCar></AddCar>
        </PrivetRout>
      },
      {
        path:"/MyListings",
        element:<PrivetRout>
          <MyListings></MyListings>
        </PrivetRout>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider   router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
