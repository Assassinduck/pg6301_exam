import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { UserLoginPage } from './routes/pages/UserLoginPage'
import { Routes } from './routes/routes'
import { ProvideReactQueryService } from './services/reactQueryService'
import { UserSessionServiceProvider } from './services/UserRoleService/UserSessionService'


const root = createRoot(document.getElementById('root') as HTMLElement);


declare global {
	interface Window {
		_app: {
			[k: string]: unknown
		}
	}
}
window._app = window._app ?? {}



root.render(
  <React.StrictMode>
    <ProvideReactQueryService>
      <UserSessionServiceProvider>
      <BrowserRouter>
      <Routes />

      </BrowserRouter>
    </UserSessionServiceProvider>

      
      </ProvideReactQueryService>
      
  </React.StrictMode>,
)
