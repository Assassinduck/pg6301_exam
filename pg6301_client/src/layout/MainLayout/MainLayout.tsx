import styled from "@emotion/styled"
import React from "react"
import { Outlet } from "react-router-dom"


const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export interface MainLayoutProps {
	children?: React.ReactNode
}

const MainLayoutComponent = ({ children = <Outlet /> }: MainLayoutProps) => {
	return (
		<>
			<Main>
				<React.Suspense>{children}</React.Suspense>
			</Main>
		</>
	)
}

export const MainLayout = React.memo(MainLayoutComponent)