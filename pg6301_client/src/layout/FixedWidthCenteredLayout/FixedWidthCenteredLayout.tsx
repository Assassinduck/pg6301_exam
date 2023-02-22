import styled from "@emotion/styled"
import React from "react"
import { Outlet } from "react-router-dom"

const Container = styled.div<{ maxWidth: number, padding: number  }>`
	max-width: ${({ maxWidth }) => maxWidth}px;
	padding: 0 ${({ padding }) => padding}px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Content = styled.div`
	width: 100%;
`
export interface FixedWidthCenteredLayoutProps {
	className?: string
	maxWidth?: number
	children?: React.ReactNode
	padding?: number
}

const FixedWidthCenteredLayoutComponent = ({
	className,
	maxWidth = 1200,
	children = <Outlet />,
	padding = 24,
}: FixedWidthCenteredLayoutProps) => {
	return (
		<Container className={className} maxWidth={maxWidth} padding={padding}>
			<Content> {children}</Content>
		</Container>
	)
}

export const FixedWidthCenteredLayout = React.memo(FixedWidthCenteredLayoutComponent)
