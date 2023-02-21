import mongoose from "mongoose";
import Role from "./role.model";
import Employee from "./employee.model"

mongoose.Promise = global.Promise;

const db = {
    mongoose,
    employee: Employee,
    role: Role,
    ROLES: ["employee", "manager"]
};


export default db;