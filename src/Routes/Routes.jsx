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
        // {
        //   path:'/',
        //   element:<Navigate to='/'></Navigate>
        // },
      {
        path:'alltoys',
        element:<AllToys></AllToys>,
    
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'mytoys',
        element:<MyToys></MyToys>
      },
      {
        path:'addtoy',
        element:<AddToy></AddToy>
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
        path:'toy/:id',
        element:<ToyDetails></ToyDetails>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      }


      ]
    },
  ]);

export default router;