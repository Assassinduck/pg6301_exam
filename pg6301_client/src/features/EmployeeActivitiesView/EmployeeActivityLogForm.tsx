import styled from "@emotion/styled"
import React, { useEffect, useMemo } from "react"
import { EmployeeActivityProps } from "../../data/employeeActivityData"
import { useMutateEmployeeActivityHours } from "../../data/employeeActivityData/useMutateEmployeeActivityHours"
import { userDataProps } from "../../data/useEmployeeData"

export interface EmployeeActivityLogFormProps {
    activities?: EmployeeActivityProps[]
    employee?: userDataProps
    employeeRefetch: () => void
    activityRefetch: () => void
}

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    align-items: center;
    flex-direction: column;
    
`



const EmployeeActivityLogFormComponent = ({ activities, employee, activityRefetch, employeeRefetch }: EmployeeActivityLogFormProps) => {
    const {mutate, error} = useMutateEmployeeActivityHours()
    const [hours, setHours] = React.useState(0)

    
    const activityOptions = useMemo(() => {
        return activities?.map((activity) => (
            <option key={activity._id} value={activity.activity_name}>{activity.activity_name}</option>
        ))
    }, [activities])
    
    function activitiesMemo(): string | undefined {
        return activities?.find((activity) => activity.activity_name === selectedActivity)?.activity_name
    } 

    const [selectedActivity, setSelectedActivity] = React.useState(activitiesMemo)


    useEffect(() => { 
        setSelectedActivity(activitiesMemo)
    },[activitiesMemo])

    const handleActivityChange = (event: React.ChangeEvent<HTMLSelectElement>) => { 
        setSelectedActivity(event.target.value)
    }

    const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHours(parseInt(event.target.value))
    }

    const handleSubmitHours = async () => { 

        const activity = activities?.find((activity) => activity.activity_name === selectedActivity)
        if(!activity) return
        mutate({ activityId: activity._id, hours_logged: hours })
        activityRefetch()
        employeeRefetch()
        
    }

    return (
        <FormContainer>
            {employee && employee?.hours_logged >= 37 && <p>You cant add any more hours this week, see you next week</p>}
            <select className="select select-bordered m-4" onChange={handleActivityChange} placeholder="select an activity">
                {activityOptions}
            </select>
            <input disabled={employee?.hours_logged === 37} className=" input input-bordered input-primary w-full max-w-xs m-4" type="number" placeholder="hours" onChange={handleHoursChange}></input>
            <button disabled={!hours} onClick={handleSubmitHours}  className="btn btn-secondary m-4" >Submit hours</button>
        </FormContainer>
    )
}

export const EmployeeActivityLogForm = React.memo(EmployeeActivityLogFormComponent)