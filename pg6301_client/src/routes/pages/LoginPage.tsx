import React from "react"
import { FixedWidthCenteredLayout } from "../../layout/FixedWidthCenteredLayout"

export interface HomePageProps {
    
}

const LoginPageComponent = (props: HomePageProps) => {
    return (
        <FixedWidthCenteredLayout>
            
        </FixedWidthCenteredLayout>
    )
}

export const LoginPage = React.memo(LoginPageComponent)