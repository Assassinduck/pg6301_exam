import jwt from 'jsonwebtoken';

import config from '../config/auth.config';

import db from '../models';
import { Employee } from './../models/employee.model';

const Employee = db.employee;
const Role = db.role;

const verifyToken = (req: any, res: any, next: any) => { 
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
    
    jwt.verify(token, config.secret, (err: any, decoded: any) => {
        if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
}

const isManager = (req: any, res: any, next: any) => { 
    Employee.findById(req._id).exec((err: any, employee) => {
        if (err) {
        res.status(500).send({ message: err });
        return;
        }
    
        Role.find(
        {
            name: { $in: employee?.roles}
        },
        (err: any, roles: any) => {
            if (err) {
            res.status(500).send({ message: err });
            return;
            }
    
            for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "manager") {
                next();
                return;
            }
            }
    
            res.status(403).send({ message: "Require Manager Role!" });
            return;
        }
        );
    });
}

export default{
    verifyToken,
    isManager
  };