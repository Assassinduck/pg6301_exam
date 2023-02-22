import React from "react"
import { EmployeeActivities } from "../../features/EmployeeActivitiesView"
import { FixedWidthCenteredLayout } from "../../layout/FixedWidthCenteredLayout"

export interface ActivitiesPageProps {
    
}

const EmployeeActivitiesPageComponent = (props: ActivitiesPageProps) => {
    return (
        <FixedWidthCenteredLayout >
            <EmployeeActivities />
        </FixedWidthCenteredLayout>
    )
}

export const EmployeeActivitiesPage = React.memo(EmployeeActivitiesPageComponent)