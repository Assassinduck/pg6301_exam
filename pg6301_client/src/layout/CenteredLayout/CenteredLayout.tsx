import styled from "@emotion/styled"
import React from "react"
import { Outlet } from "react-router-dom"
export interface CenteredLayoutProps {
  children?: React.ReactNode
  className?: string
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 24px;
  width: 100%;
`
const CenteredLayoutComponent = ({ children = <Outlet />, className }: CenteredLayoutProps) => {
  return <Container className={className}>{children}</Container>
}
export const CenteredLayout = React.memo(CenteredLayoutComponent)