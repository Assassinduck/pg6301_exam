import { useQuery } from "@tanstack/react-query";
import { EmplyeeActivityProps, employeeActivityKeys } from "./employeeActivityKeys";

export type EmployeeDepartements = "IT" | "HR" | "Sales" | "Marketing" | "Finance" | "Other";


export interface EmployeeActivityProps { 
    _id: string;
    activity_name: string;
    hours_Logged: number;
    departements_autharized: EmployeeDepartements[];
    description: string;
}

export const useAllEmployeeActivities = () => { 
    return useQuery(employeeActivityKeys.allActivities, async () => {
        const response = await fetch(`/api/activities`);
        const data = await response.json();
        return data as EmployeeActivityProps[];
    });
}