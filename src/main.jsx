import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='mx-auto max-w-[1440px]'>
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
 </div>
)
