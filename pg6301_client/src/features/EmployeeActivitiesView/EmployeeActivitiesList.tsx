import React from "react"
import { EmployeeActivityItem } from "./EmployeeActivityItem"

export interface EmployeeActivityListProps {
    activities: any[]
}




const EmployeeActivityListComponent = ({ activities }: EmployeeActivityListProps) => {
    
    return (
        <div>
            <h1>Activities</h1>
            <EmployeeActivityItem activityDepartement="IT" activityDescription="hei" activityLoggedHours={5} activityName="ball" />
            <ul>
                
            </ul>
        </div>
    )

}

export const EmployeeActivityList = React.memo(EmployeeActivityListComponent)