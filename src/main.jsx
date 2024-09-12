import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='dark:bg-black dark:text-white'>
      <App></App>
    </div>
</React.StrictMode>,
)
