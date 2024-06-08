import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router.jsx'
import './index.css'
import { SneakersProvider } from './context/SneakersProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SneakersProvider>
      <AppRouter />
    </SneakersProvider>
  </React.StrictMode>,
)
