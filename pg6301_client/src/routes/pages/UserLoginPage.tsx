import styled from "@emotion/styled"
import React from "react"
import { UserLogin } from "../../features/UserLogin/UserLogin"
import { CenteredLayout } from "../../layout/CenteredLayout/CenteredLayout"

export interface HomePageProps {
    
}

const LoginBackground = styled.div`
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
`

const UserLoginPageComponent = (props: HomePageProps) => {
    return (
        <CenteredLayout >
            <LoginBackground className="bg-loginBackground">
                <UserLogin />
                </LoginBackground>
        </CenteredLayout>
    )
}

export const UserLoginPage = React.memo(UserLoginPageComponent)