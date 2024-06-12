import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router.jsx'
import { SneakersProvider } from './context/SneakersProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer /> {/* Alerts */}
    <SneakersProvider>
      <AppRouter />
    </SneakersProvider>
  </React.StrictMode>,
)
