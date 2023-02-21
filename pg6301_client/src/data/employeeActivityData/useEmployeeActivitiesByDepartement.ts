import { useQuery } from "@tanstack/react-query";
import { EmplyeeActivityProps, employeeActivityKeys } from "./employeeActivityKeys";

type EmployeeDepartements = "IT" | "HR" | "Sales" | "Marketing" | "Finance" | "Other";




export const useEmployeeActivitiesByDepartement = (params?: EmplyeeActivityProps) => { 
    return useQuery(employeeActivityKeys.byDepartement(params), async () => {
        const response = await fetch(`/api/activities?departement=${params?.departement}`);
        const data = await response.json();
        return data as any[] ?? [];
    });
}