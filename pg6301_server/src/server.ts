
import express, { Express } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import db from './app/models';
import dbConfig from './app/config/db.config';

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const Role = db.role;

const initialConnection = ()=> {
  Role.estimatedDocumentCount((err: any, count: number) => { 
    if (!err && count === 0) {
      new Role({
        name: "employee",
        
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
  
        console.log("added 'employee' to roles collection");
      });
  
      new Role({
        name: "Manager"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
  
        console.log("added 'moderator' to roles collection");
      });
  
      
    }
  }, (err: any) => {
    console.log("error", err);
  });
}

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`).then(() => { 
  console.log("Connected to the database!");
  initialConnection();
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


