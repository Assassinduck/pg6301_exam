import React from "react"

export interface EmployeeActivityLogFormProps {
    
}

const EmployeeActivityLogFormComponent = (props: EmployeeActivityLogFormProps) => {
    return (
        <div>
            <h1>EmployeeActivityLogForm</h1>
        </div>
    )
}

export const EmployeeActivityLogForm = React.memo(EmployeeActivityLogFormComponent)