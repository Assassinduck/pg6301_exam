import { EmployeeDepartements } from "../EmployeeDepartements";

export interface EmplyeeActivityProps {
    departement: EmployeeDepartements;
}


export const employeeActivityKeys = {
    allActivities: ["activities"] as const,
    byDepartement: (data?: EmplyeeActivityProps) => [...employeeActivityKeys.allActivities, "byDepartement", data?.departement] as const,
}