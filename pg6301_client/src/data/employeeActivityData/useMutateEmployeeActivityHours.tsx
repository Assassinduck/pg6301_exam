import { useMutation, useQueryClient } from "@tanstack/react-query"

interface EmployeeActivityHoursProps { 
    activityId: string
    hours_logged: number
}

export const useMutateEmployeeActivityHours = () => { 
    const employeeId = "63f4f1ceb46d3f4a1eb4cf34"
    const queryClient = useQueryClient()
    console.log(employeeId)
    return useMutation((employeeActivityHours: EmployeeActivityHoursProps) => {
        return fetch(`http://localhost:8080/api/activities/${employeeId}/${employeeActivityHours.activityId}/${employeeActivityHours.hours_logged}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeActivityHours)
        })
    },
        
    )
}