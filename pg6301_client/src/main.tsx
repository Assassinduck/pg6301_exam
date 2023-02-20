import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'


const root = createRoot(document.getElementById('root') as HTMLElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
