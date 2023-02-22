import styled from "@emotion/styled"
import React from "react"
import { EmployeeActivityProps } from "../../data/employeeActivityData"
import { userDataProps } from "../../data/useEmployeeData"
import { EmployeeActivityItem } from "./EmployeeActivityItem"

export interface EmployeeActivityListProps {
    activities?: EmployeeActivityProps[]
    activitiesLogged?: userDataProps["activities_logged"]
}



const ActivityList = styled.ul`
    list-style: none;
    margin-top: 50px;
`
const ActivityListItem = styled.li`
    margin-bottom: 20px;

`

const EmployeeActivityListComponent = ({ activities, activitiesLogged }: EmployeeActivityListProps) => {

    const findHoursLogged = (employeeActivityName: EmployeeActivityProps["activity_name"]) => { 
        const activity = activitiesLogged?.find((activity) => activity.activity_name === employeeActivityName)
        return activity?.hours_logged ?? 0
    }



    return (
        <div>
            <ActivityList>
                {activities?.map((activity) => (
                    <ActivityListItem  key={activity._id}>
                        <EmployeeActivityItem
                        activityDepartement={activity.departements_autharized}
                        activityDescription={activity.description}
                        activityName={activity.activity_name}
                        findLoggedHoursForActivity={findHoursLogged}
                        />
                        
                    </ActivityListItem>
                ))}
            </ActivityList>
        </div>
    )

}

export const EmployeeActivityList = React.memo(EmployeeActivityListComponent)