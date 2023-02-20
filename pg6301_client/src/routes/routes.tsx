import React from "react"
import { Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout/MainLayout"
import { LoginPage } from "./pages"


export const Routes = () => (
		<ReactRouterRoutes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<LoginPage />} />
				
			</Route>
		</ReactRouterRoutes>
)
