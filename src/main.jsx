import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='mx-auto max-w-[1440px]'>
   <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
 </div>
)
