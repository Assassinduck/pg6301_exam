import React from "react"
import { Navigate, Routes as ReactRouterRoutes, Route, createBrowserRouter } from "react-router-dom"
import { EmployeeActivities } from "../features/EmployeeActivitiesView"
import { MainLayout } from "../layout/MainLayout/MainLayout"
import { UserLoginPage } from "./pages"
import { EmployeeActivitiesPage } from "./pages/EmployeeActivitiesPage"


export const Routes = () =>  (
		<ReactRouterRoutes>
			<Route path="/" element={<MainLayout />}>
			<Route index element={<UserLoginPage />} />
			<Route path="employee" element={<EmployeeActivitiesPage />} />
			<Route path="manager" element={<Navigate to="/manager/activities" />} />
				
			</Route>
		</ReactRouterRoutes>
 	)
