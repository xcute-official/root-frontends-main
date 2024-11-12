"use server";

import { FieldValues } from "react-hook-form";
import { SigninSchema, SignupSchema } from "../schemas/auth";
import { getUserByUsername } from "../data/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from "../libs/db";
import { cookies } from "next/headers";
import { SessionType } from "../types";




export const getSession = async ()=>{
    const cookie = await cookies();
    const token = cookie.get('auth-token')?.value;
    if(!token){
        return null;
    }
    const sessionData = jwt.verify(token, 'secret') as SessionType;
    return sessionData || null;
}

export const signout = async ()=>{
    try{
        (await cookies()).delete('auth-token');
        return {
            success: 'LoggedOut'
        }
    }catch(error){
        error: 'Log out error'
    }
}
export const signin = async (data: FieldValues)=>{
    const validation = SigninSchema.safeParse(data);
    if(!validation.success){
        return {
            error: "Invalid data"
        }
    }
    const {username, password, code} = validation.data;

    try{
        const user = await getUserByUsername(username);
        if(!user){
            return {
                error: "User doesn't exists"
            }
        }
        if(!user.email || !user.passwordHash || !user.username){
            return {
                error: "You are not registered properly"
            }
        }
        const passwordMatch = await bcrypt.compare(password, user.passwordHash);
        if(!passwordMatch){
            return {
                error: "Password incorrect"
            }
        }
        // sign token
        const token = jwt.sign(user, 'secret', {expiresIn: '1h'});
        (await cookies()).set({
            name: 'auth-token',
            value: token,
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            path: '/'
        });
        return {
            success: "Logged In",
            data: {
                username: username
            }
        }
    }catch(error){
        console.error(error);
        return {
            error: "server internal error"
        };
    }
}
export const signup = async (data: FieldValues)=>{
    const validation = SignupSchema.safeParse(data);
    if(!validation.success){
        return {
            error: "Invalid data"
        }
    }
    console.log(validation);
    const {username, password, email} = validation.data;
    try{
        const user = await getUserByUsername(username);
        if(user){
            return {
                error: "User already exists"
            }
        }
        const passwordHash = await bcrypt.hash(password, 12);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                passwordHash: passwordHash
            }
        });
        return {
            success: "successful for account creation"
        }
    }catch(error){
        console.error(error);
        return {
            error: "internal server error"
        }
    }
    
    
}