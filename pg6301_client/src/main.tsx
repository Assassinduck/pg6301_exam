import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import { LoginPage } from './routes/pages/LoginPage'
import { ProvideReactQueryService } from './services/reactQueryService'


const root = createRoot(document.getElementById('root') as HTMLElement);


declare global {
	interface Window {
		_app: {
			[k: string]: unknown
		}
	}
}
window._app = window._app ?? {}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
])

root.render(
  <React.StrictMode>
  <ProvideReactQueryService>
      <RouterProvider router={router} />
      </ProvideReactQueryService>
  </React.StrictMode>,
)
