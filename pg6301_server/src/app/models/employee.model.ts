import mongoose from "mongoose";


export interface Employee {  
  _id: string;
  username: string;
  password: string;
  roles: string[];
}

const Employee = mongoose.model(
    "Employee",
    new mongoose.Schema({
      _id: String,  
      username: String,
      password: String,
      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
    })
  );

export default Employee;