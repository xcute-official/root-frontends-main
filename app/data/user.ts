import { db } from "../libs/db";

export const getUserByUsername = async (username: string)=>{
    try{
        const user = await db.user.findUnique({
            where: {
                username
            }
        });
        return user;
    }catch(error){
        return null;
    }
}