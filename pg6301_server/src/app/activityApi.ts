import { Db, MongoClient, ObjectId  } from "mongodb"
import { Request, Response, Router } from "express"

export const activitiesApi = (db: Db) => { 


    const dataSetUp = async () => {
        const activities = await db.collection("activities").find().toArray()

        if (activities.length === 0) {
            db.collection("activities").insertMany([
                {
                    "_id": new ObjectId("63f576329bc5e9c40ec742cb"),
                    "departements_autharized": [
                      "IT",
                      "HR"
                    ],
                    "description": "cool",
                    "activity_name": "gaming"
                },
                {
                    "_id": new ObjectId("63f4faeaa47821027cc39099"),
                    "activity_name": "Meetings",
                    "departements_autharized": [
                      "HR"
                    ],
                    "description": "boring"
                },
                {
                    "_id": new ObjectId( "63f4fdf744427cda29173f6a"),
                    "departements_autharized": [
                      "IT"
                    ],
                    "description": "fun",
                    "activity_name": "coding"
                  }
            ])
        }
    }

    dataSetUp()

    const router: Router = Router();

    

    router.get("/", async (req: Request, res: Response) => {
        const activities = await db.collection("activities").find().toArray()
        res.json(activities)
    })

    router.get("/:id", async (req: Request, res: Response) => { 
        const activity =  await db.collection("activities")
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
        console.log("lol",departementEmp)

        console.log(findActivities)

       
        const activites = findActivities.filter((activity) => {
            if (activity.departements_autharized.includes(departementEmp.departement)) {
                return activity
            }
        })

        if (activites) {
            res.json(activites)

        }
        
    })
    // update hours logged on activity for employee
    router.put("/:employeeid/:activityId/:hours_logged", async (req: Request, res: Response) => { 
        const activity = await db.collection("activities")
            .findOne({ _id: new ObjectId(req.params.activityId)}).then((activity) => { 
                return activity
            })
        
        const employee = await db.collection("employees")
            .findOne({ _id: new ObjectId(req.params.employeeid) })
        
        if (activity && employee) {
            if ((parseFloat(req.params.hours_logged) + parseFloat(employee.hours_logged)) > 37) {
                res.json({ error: "Logged hours cannot be greater than 37" })
                return
            }
          
            
            const updateEmployeeActivityHoursLogged = await db
                .collection("employees")
                .updateOne({ _id: new ObjectId(req.params.employeeid) }, { $inc: { hours_logged: parseFloat(req.params.hours_logged) } })
            
            const updateEmployeeActivity = await db
                .collection("employees")
                .updateOne({ _id: new ObjectId(req.params.employeeid), "activities_logged.activity_ref": new ObjectId(req.params.activityId) }, { $inc: { "activities_logged.$.hours_logged":  parseFloat(req.params.hours_logged)  } })
            
            res.json({ message: "Hours logged updated" })
        } else {
            res.json({ error: "Activity not found" })
        }
    })
    router.post("/createactivity", async (req: Request, res: Response) => { 
        const activity = req.body
        console.log("activity",activity)
        const insertActivity = await db.collection("activities").insertOne(activity)
        res.json(activity)
    })


    return router

}

