import request from "supertest";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {beforeAll} from "@jest/globals";
import { employeesApi } from './../app/employeeApi';
dotenv.config();


const app = express();
app.use(bodyParser.json());


const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
beforeAll(async () => {
  jest.setTimeout(30000);
    await mongoClient.connect();
    const database = mongoClient.db("employee_test");
  await database.collection("employee_test").deleteMany({});
  
    app.use("/api/employees", employeesApi(mongoClient.db("employee_test")));

});

afterAll(async () => {
    mongoClient.close();
}
);


describe("GET /api/employees", () => { 

    test("OK, get all employees", async () => {
      
        const res = await request(app).get("/api/employees");
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(2);
    });

    test("OK, get employee by id", async () => { 
        const res = await request(app).get("/api/employees/63f4f1ceb46d3f4a1eb4cf34");
        expect(res.status).toBe(200);
        expect(res.body[0]).toHaveProperty("name", "Stian");
    });

    test("OK, get employees by department", async () => {
        const res = await request(app).get("/api/employees/departement/IT");
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty("name", "Stian");
    });
    
    

});