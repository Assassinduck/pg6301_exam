import { EmployeeDepartements } from "../EmployeeDepartements";

export interface EmplyeeActivityProps {
    employeeId: string;
    departement: EmployeeDepartements;
}


export const employeeActivityKeys = {
    allActivities: ["activities"] as const,
    byDepartement: (data?: EmplyeeActivityProps) => [...employeeActivityKeys.allActivities, "byDepartement", data] as const,
}