
import express, { Express, Router } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { activitiesApi } from './app/activityApi';
import { employeesApi } from './app/employeeApi';
dotenv.config();

const app = express();



app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


export const router: Router = Router();


const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");

mongoClient.connect().then(async () => { 
  console.log("Connected to mongodb");
  app.use("/api/employees", employeesApi(mongoClient.db("pgr6301")));
  app.use("/api/activities", activitiesApi(mongoClient.db("pgr6301")));
  
}).catch(err => { 
  console.log(err);
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


