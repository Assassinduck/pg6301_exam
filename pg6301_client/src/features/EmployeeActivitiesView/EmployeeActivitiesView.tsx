import React from "react"
import { useUserSessionService } from "../../services/UserRoleService/UserSessionService"
import { EmployeeActivityList } from "./EmployeeActivitiesList"

export interface ActivitiesProps {
    
}

const ActivitiesComponent = (props: ActivitiesProps) => {

    const { getActivitiesbyDepartment } = useUserSessionService()

    
    


    return (
        <div>
            <EmployeeActivityList activities={[]}/>
        </div>
    )
}

export const EmployeeActivities = React.memo(ActivitiesComponent)


