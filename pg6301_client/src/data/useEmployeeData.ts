import { useQuery } from "@tanstack/react-query";
import { EmployeeDepartements } from "./EmployeeDepartements";


export interface userDataProps {
    id: string;
    name: string;
    departement: EmployeeDepartements
    hours_logged: number;
    activities_logged: activities_logged[];
}

type activities_logged = {
    activity_name: string;
    hours_logged: number;
    activity_ref: string;
}


const userDataKeys = {
    allUsers: ["users"] as const,
    byId: (data?: userDataProps["id"]) => [...userDataKeys.allUsers, "byId", data] as const,
}




export const useEmployeeData = () => { 
    const userId = "63f4f1ceb46d3f4a1eb4cf34"
    return useQuery(userDataKeys.byId(userId), async () => {
        const response = await fetch(`http://localhost:8080/api/employees/${userId}`);
        const data = await response.json();
       
        return data[0] as userDataProps ?? [];
    }
    );
}