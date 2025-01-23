import {Types} from "mongoose";
import {User} from "../models/user.model";
import jwt from 'jsonwebtoken';
import { SECRET } from "./env";
export interface IUserToken extends Partial<Omit<User, "password" | "isActive" | "email" | "fullName" | "profilePicture" | "username">> {
    id?: Types.ObjectId;
    role?: string;
}


export const generateToken =(user: IUserToken):string =>{
    const token=jwt.sign(user,SECRET,{
        expiresIn:"1h",
    });
    return token;
};
export const getUserData =(token:string) =>{
    const user = jwt.verify(token,SECRET) as IUserToken;
    return user;
};