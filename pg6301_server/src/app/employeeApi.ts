import { Db, ObjectId } from "mongodb";
import { Request, Response, Router } from "express";





export const employeesApi = (db: Db) => {

    const dataSetUp = async () => {
        const employees = await db.collection("employees").find().toArray()

        if (employees.length === 0) {
            db.collection("employees").insertMany([
                {
                    "_id": new ObjectId("63f4f1ceb46d3f4a1eb4cf34"),
                    "name": "Stian",
                    "age": 23,
                    "departement": "IT",
                    "hours_logged": 17,
                    "activities_logged": [
                        {
                            "activity_name": "gaming",
                            "hours_logged": 5,
                            "activity_ref": new ObjectId("63f576329bc5e9c40ec742cb"),
                        },
                        {
                            "activity_name": "coding",
                            "activity_ref": new ObjectId("63f4fdf744427cda29173f6a"),
                            "hours_logged": 11,
                          
                        }
                    ]
                },
                {
                    "_id": new ObjectId("63f4fc9a44427cda29173f69"),
                    "name": "Trine",
                    "age": "30",
                    "departement": "HR",
                    "hours_logged": 15,
                    "activities_logged": [
                        {
                            "activity_name": "Meetings",
                            "hours_logged": 10,
                            "activity_ref": new ObjectId("63f4faeaa47821027cc39099"),
                        }
                    ]
                },
    
            ])
        } 
    }
    dataSetUp()
    const router: Router = Router();

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


    //EMPLOYEES BY DEPARTEMENT
    router.get("/departement/:departement", async (req: Request, res: Response) => {
        const employeedepartement = req.params.departement
        const employees = await db.collection("employees").find({ departement: employeedepartement }).toArray()
        res.json(employees)
     })

    //DELETE EMPLOYEE BY ID and NAME
    router.delete("/:id/:name", async (req: Request, res: Response) => {
        const employeeid = req.params.id
        const employeename = req.params.name
        const employees = await db.collection("employees").deleteOne({ _id: new ObjectId(employeeid), name: employeename })
        res.json(employees)
    });

    //ADD EMPLOYEE
    router.post("/addEmployee", async (req: Request, res: Response) => { 
        const employee = req.body
        const employees = await db.collection("employees").insertOne(employee)
        res.json(employees)
    })


    return router;

    
 }
