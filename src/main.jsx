import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import router from './routes/routes/Routes.jsx';
import AuthProvider from './contexts/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto bg-hero min-h-screen text-slate-100 overflow-hidden'>
    <HelmetProvider>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
    </HelmetProvider>
  </div>,
)
