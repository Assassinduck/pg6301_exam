import request from "supertest";
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {beforeAll} from "@jest/globals";
import { activitiesApi } from "../app/activityApi";
dotenv.config();


const app = express();
app.use(bodyParser.json());



const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
beforeAll(async () => {
    await mongoClient.connect();
    const database = mongoClient.db("news_articles_test");
    await database.collection("articles_test").deleteMany({});
    app.use("/api/activities", activitiesApi(mongoClient.db("pgr6301")));

  });