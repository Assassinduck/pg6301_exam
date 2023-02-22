import styled from "@emotion/styled"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useEmployeeActivitiesByDepartement } from "../../data/employeeActivityData"
import { useEmployeeData } from "../../data/useEmployeeData"
import { EmployeeActivityList } from "./EmployeeActivitiesList"
import { EmployeeActivityLogForm } from "./EmployeeActivityLogForm"

export interface ActivitiesProps {
    
}


const EmployeeTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    justify-content: center;
`
 

const BackButton = styled.button`
    margin-top: 20px;
`

const EmployeeActivityViewContainer = styled.div`
    width: 100vh;
`

const ActivitiesComponent = (props: ActivitiesProps) => {

    const { data: activities, refetch: activityRefetch } = useEmployeeActivitiesByDepartement()
    const {data: employee, refetch: employeRefetch} = useEmployeeData()

    const navigate = useNavigate()

    const handleGoBackToHome = () => { 
        navigate("/")
    }
    


    return (
        <EmployeeActivityViewContainer>
            <BackButton className="btn btn-secondary" onClick={handleGoBackToHome}>go back to "login" page</BackButton>

            <EmployeeTitleContainer>
            <h1 className="text-lg">Employee Activities</h1>
            <h2 className="text-lg">Welcome {employee?.name ?? "employee"}</h2>
                <p>Total Hours logged: {employee?.hours_logged}</p>   
            </EmployeeTitleContainer>

            <EmployeeActivityLogForm activityRefetch={activityRefetch} employeeRefetch={employeRefetch} activities={activities} employee={employee} />
            
            <EmployeeActivityList activities={activities} activitiesLogged={ employee?.activities_logged } />
        </EmployeeActivityViewContainer>
    )
}

export const EmployeeActivities = React.memo(ActivitiesComponent)


