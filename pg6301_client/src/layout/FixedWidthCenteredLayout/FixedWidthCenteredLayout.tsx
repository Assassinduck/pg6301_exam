import styled from "@emotion/styled"
import React from "react"
import { Outlet } from "react-router-dom"

const Container = styled.div<{ maxWidth: number }>`
	max-width: ${({ maxWidth }) => maxWidth}px;
	width: 100%;
	padding: 0 24px;
	width: 100%;
`

const Content = styled.div`
	width: 100%;
`
export interface FixedWidthCenteredLayoutProps {
	className?: string
	maxWidth?: number
	children?: React.ReactNode
}

const FixedWidthCenteredLayoutComponent = ({
	className,
	maxWidth = 1200,
	children = <Outlet />
}: FixedWidthCenteredLayoutProps) => {
	return (
		<Container className={className} maxWidth={maxWidth}>
			<Content> {children}</Content>
		</Container>
	)
}

export const FixedWidthCenteredLayout = React.memo(FixedWidthCenteredLayoutComponent)
