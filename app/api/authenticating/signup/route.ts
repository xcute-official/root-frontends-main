import { getUserByUsername } from "@/app/data/user";
import { db } from "@/app/libs/db";
import { SignupSchema } from "@/app/schemas/auth";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export const POST = async (req: Request)=>{
    try{
        const body = await req.json();
        const validation = SignupSchema.safeParse(body);
        if(!validation.success){
            return new NextResponse("Invalid data", {status: 401});
        }
        const { username, password, email } = validation.data;
        const user = await getUserByUsername(username);
        if(user){
            return new NextResponse("User already exists", {status: 402});
        }
        const passwordHash = await bcrypt.hash(password, 12);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                passwordHash: passwordHash
            }
        });
        return NextResponse.json({
            data: {
                username: newUser.username,
                email: newUser.email
            },
            authenticated: true
        }, {status: 200});
    }catch(error){
        console.error("ERROR_in /api/authenticating/signup, ", {error});
        return new NextResponse("Server internal error", {status: 500});
    }
}