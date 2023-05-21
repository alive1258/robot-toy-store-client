import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivetRoute from "./PrivetRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import MyToysRow from "../Pages/MyToysRow/MyToysRow";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/', 
          element:<Home></Home> 
        },
        {
          path:'/',
          element:<Navigate to='/'></Navigate>
        },
      {
        path:'alltoys',
        element:<AllToys></AllToys>,
        loader:()=> fetch('https://robot-toy-store-server.vercel.app/addToys')
    
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'mytoys',
        element:<PrivetRoute><MyToys></MyToys></PrivetRoute>,
     
      },
 
  
      {
        path:'addtoy',
        element:<PrivetRoute><AddToy></AddToy></PrivetRoute>,
      },
      
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'updatetoy/:id',
        element:<UpdateToy></UpdateToy>,
        loader:({params})=>fetch(`https://robot-toy-store-server.vercel.app/addToys/${params.id}`)
      },
      {
        path:'singletoy/:id',
        element:<PrivetRoute><SingleToyDetails></SingleToyDetails></PrivetRoute>,
        loader:({params})=>fetch(`https://robot-toy-store-server.vercel.app/products/${params.id}`)
      },

      {
        path:'toy/:id',
        element:<PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
        loader:({params})=>fetch(`https://robot-toy-store-server.vercel.app/addToys/${params.id}`)
      }


      ]
    },
  

  
  ]);

export default router;