import { useQuery } from "@tanstack/react-query";
import { EmplyeeActivityProps, employeeActivityKeys } from "./employeeActivityKeys";
import { EmployeeActivityProps } from "./useAllEmployeeActivities";

type EmployeeDepartements = "IT" | "HR" | "Sales" | "Marketing" | "Finance" | "Other";

interface EmployeeActivitiesByDepartementProps{
    employeeId: string;
    departement: EmployeeDepartements;
}


export const useEmployeeActivitiesByDepartement = () => { 
    const params: EmployeeActivitiesByDepartementProps = {
        employeeId: "63f4f1ceb46d3f4a1eb4cf34",
        departement: "IT"
    }
    return useQuery(employeeActivityKeys.byDepartement(params), async () => {
        const response = await fetch(`http://localhost:8080/api/activities/${params?.employeeId}/${params?.departement}`);
        const data = await response.json();
        console.log(data);
        return data as EmployeeActivityProps[] ?? [];
    });
}