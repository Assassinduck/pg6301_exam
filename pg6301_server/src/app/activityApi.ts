import { Db, MongoClient, ObjectId  } from "mongodb"
import { router } from "../server"
import { Request, Response } from "express"

export const activitiesApi = (db: Db) => { 

    router.get("/", async (req: Request, res: Response) => {
        const activities = await db.collection("activities").find().toArray()
        console.log(activities)
        res.json(activities)
    })

    router.get("/:id", async (req: Request, res: Response) => { 
        const activity = await db.collection("activities")
            .findOne({ _id: new ObjectId(req.params.id) })
        res.json(activity)
    })

    //delete activity from db by activity id
    router.delete("/:id", async (req: Request, res: Response) => { 
        const activity = await db.collection("activities")
            .deleteOne({ _id: new ObjectId(req.params.id) })
        res.json(activity)
    })

   //get all activities for user based on department
    router.get("/:employeeid/:department", async (req: Request, res: Response) => { 
        const departement = req.params.department
        const employeeid = req.params.employeeid
        const findActivities = await (await db.collection("activities").find({ departements_autharized: departement }).toArray()).map((activity) => { 
            return {
                _id: activity._id,
                activity_name: activity.activity_name,
                departements_autharized: activity.departements_autharized,
                description: activity.description
            }
        })
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

        const departementEmp = employees[0]
        console.log(departementEmp)

       
        const activites = findActivities.filter((activity) => {
            if (activity.departements_autharized.includes(departementEmp.departement)) {
                return activity
            }
        })

        if (activites) {
            res.json(activites)

        }
        
        

        
    })

    router.put("/:userid/:activityId/:hours_logged", async (req: Request, res: Response) => { 
        //update logged hours for user
        const activity = await db.collection("activities")
            .findOne({ _id: new ObjectId(req.params.activityId) })
        
        const employee = await db.collection("employees")
            .findOne({ _id: new ObjectId(req.params.userid) })
        
        if (activity && employee) {
            if ((parseFloat(req.params.hours_logged) + activity.hours_logged) > 37) {
                res.json({ error: "Logged hours cannot be greater than 37" })
                return
            }
            const updateActivity = await db
                .collection("activities")
                .updateOne({ _id: new ObjectId(req.params.activityId) }, { $set: { hours_logged: parseFloat(activity.hours_logged) + parseFloat(req.params.hours_logged) } })
            
            const updateEmployeeActivityHoursLogged = await db
                .collection("employees")
                .updateOne({ _id: new ObjectId(req.params.userid) }, { $set: { hours_logged: parseFloat(employee.hours_logged) + parseFloat(req.params.hours_logged) } })
            
            console.log(updateActivity)
            res.json(updateActivity)
        } else {
            res.json({ error: "Activity not found" })
        }
    })
    router.post("/activities", async (req: Request, res: Response) => { 

    })


    return router

}

