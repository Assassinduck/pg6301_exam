import { Db, ObjectId } from "mongodb";
import { router } from "../server";
import { Request, Response } from "express";



export const employeesApi = (db: Db) => {
    //ALL EMPLOYEES
    router.get("/", async (req: Request, res: Response) => { 
        const employees = await db.collection("employees").find().toArray()
        res.json(employees)
    });
    //EMPLOYEE BY ID
    router.get("/:id", async (req: Request, res: Response) => {
        const employeeid = req.params.id
        const employees = await (await db.collection("employees").find({ _id: new ObjectId(employeeid) }).toArray()).map((employee) => { 
            
            return {
                _id: employee._id,
                name: employee.name,
                departement: employee.departement,
                age: employee.age,
                hours_logged: employee.hours_logged,
                activities_logged: employee.activities_logged
            }
        })
        res.json(employees)
    });

    return router;

    
 }
