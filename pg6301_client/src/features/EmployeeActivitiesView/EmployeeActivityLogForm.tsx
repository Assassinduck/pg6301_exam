import React from "react"

export interface EmployeeActivityLogFormProps {
    
}

const EmployeeActivityLogFormComponent = ({}: EmployeeActivityLogFormProps) => {
    return (
        <div>
           <select></select>
        </div>
    )
}

export const EmployeeActivityLogForm = React.memo(EmployeeActivityLogFormComponent)