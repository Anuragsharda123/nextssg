import { Response } from "express";
import User from "../models/User";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const getUsers = async(req:any, res:Response) => {
    try{
        const users = await User.findAll();
        res.status(200).json({"users": users, "message":"User fetched"});
    }
    catch(err){
        res.status(500).json({'message': 'Error fetching users'});
    }
};

export const addUser  = async(req: any, res: Response) => {
    try{
        const {name, email, password} = req.body;
        const user = await User.create({
            name: name,
            email: email,
            password: password,
        });
        res.status(201).json({"message":"User created"});
    }
    catch(err){
        res.status(500).json({'message': 'Error adding user'});
    }
};