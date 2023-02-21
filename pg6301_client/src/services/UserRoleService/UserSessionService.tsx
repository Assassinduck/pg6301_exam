import { createContext } from "react"

type userRole = "Employee" | "Manager"

interface UserSessionServiceContextProps {
    getActivitiesbyDepartment: (department: EmplyeeActivityProps["departement"]) => any[]
    loginUser: (username: string, password: string) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserSessionServiceContext = createContext<UserSessionServiceContextProps>(undefined as any)
UserSessionServiceContext.displayName = "UserRoleServiceContext"
export const useUserSessionService = createContextUser(UserSessionServiceContext)

import React from "react"
import { createContextUser } from "../../utils/createContextUser"
import { useAllEmployeeActivities } from "../../data/employeeActivityData"
import { EmplyeeActivityProps } from "../../data/employeeActivityData/employeeActivityKeys"

export interface UserSessionServiceProviderProps {
    children: React.ReactNode,
}

const UserSessionServiceProviderComponent = ({ children }: UserSessionServiceProviderProps) => {
    const {data: activities} = useAllEmployeeActivities()
    
    const getActivitiesbyDepartment = (department: EmplyeeActivityProps["departement"]) => { 
        return activities?.filter((activity) => activity.departement === department) ?? []
    }

    const loginUser = async (username: string, password: string): Promise<void> => { 
        
    }
    
    return (
        <UserSessionServiceContext.Provider value={{getActivitiesbyDepartment, loginUser}}>{children}</UserSessionServiceContext.Provider>
    )
}

export const UserSessionServiceProvider = React.memo(UserSessionServiceProviderComponent)

