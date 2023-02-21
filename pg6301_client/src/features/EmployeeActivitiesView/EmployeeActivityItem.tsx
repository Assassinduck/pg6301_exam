import styled from "@emotion/styled"
import React from "react"
import { EmployeeDepartements } from "../../data/EmployeeDepartements"

export interface EmployeeActivityItemProps {
    activityName: string
    activityDescription: string
    activityDepartement: EmployeeDepartements
    activityLoggedHours: number
}

const EmployeeActivityText = styled.p`
    font-size: 1.5rem;
    color: white;
    
`



const EmployeeActivityItemComponent = ({activityName ="julian", activityDepartement= "IT", activityDescription ="its cool", activityLoggedHours = 5}: EmployeeActivityItemProps) => {
    return (
        <div className="card w-96 bg-blue-400">
            <div className="card-body flex-row">
            <EmployeeActivityText>{activityName}</EmployeeActivityText>
            <EmployeeActivityText>{activityDepartement}</EmployeeActivityText>
            <EmployeeActivityText>{activityDescription}</EmployeeActivityText>
            <EmployeeActivityText>{activityLoggedHours}</EmployeeActivityText>
            </div>
            
        </div>
    )
}

export const EmployeeActivityItem = React.memo(EmployeeActivityItemComponent)