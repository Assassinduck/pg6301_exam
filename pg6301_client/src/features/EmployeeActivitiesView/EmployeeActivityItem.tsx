import styled from "@emotion/styled"
import React from "react"
import { EmployeeActivityProps } from "../../data/employeeActivityData"
import { EmployeeDepartements } from "../../data/EmployeeDepartements"

export interface EmployeeActivityItemProps {
    activityName: string
    activityDescription: string
    activityDepartement: EmployeeDepartements[]
    findLoggedHoursForActivity: (employeeActivity: EmployeeActivityProps["_id"]) => number
}

const EmployeeActivityText = styled.p`
    font-size: 16px;
    color: white;
    
`

const ActivityCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: blue;
    border-radius: 10px;
`



const EmployeeActivityItemComponent = ({ activityName, activityDepartement, activityDescription, findLoggedHoursForActivity }: EmployeeActivityItemProps) => {
    const hoursLogged = findLoggedHoursForActivity(activityName)
    return (
        <ActivityCard >
            <div className="card-body flex-column">
            <EmployeeActivityText>Activity: {activityName}</EmployeeActivityText>
            <EmployeeActivityText>Departements: {activityDepartement.join(",")}</EmployeeActivityText>
            <EmployeeActivityText>Description: {activityDescription}</EmployeeActivityText>
            <EmployeeActivityText>Hours logged : {hoursLogged}</EmployeeActivityText>
            
            </div>
            
        </ActivityCard>
    )
}

export const EmployeeActivityItem = React.memo(EmployeeActivityItemComponent)