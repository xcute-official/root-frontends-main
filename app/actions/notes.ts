"use server";
import { FieldValues } from "react-hook-form";
import { NoteInitSchema } from "../schemas/notes";
import { db } from "../libs/db";
import { JSONContent } from "@tiptap/react";
import { getSession } from "./auth";
import { getUserById } from "../data/user";

export const saveNote = async (id: string, content: JSONContent)=>{
    try{
        const response = await db.post.update({
            where: {
                id
            },
            data: {
                body: {
                    content: content
                }
            }
        });
        if(!response){
            return {error: "not saved"}
        }
        console.log("UPDATED_RESPONSE: ", response);
        return {success: "ok"};
    }catch(error){
        console.log(error);
        return {error: "not saved"}
    }
}
export const initNote = async (data: FieldValues)=>{
    const validation = NoteInitSchema.safeParse(data);
    if(!validation.success){
        return {
            error: "Invalid data!"
        }
    }
    try{
        const {title, description, slug, imageLink} = validation.data;
        const user = await getSession();
        if(!user){
            return {
                error: "You are not logged In"
            }
        }
        const getUser = await getUserById(user.id);
        if(!getUser){
            return {
                error: "User doesn't exist"
            }
        }
        const createNote = await db.post.create({
            data: {
                body: {
                    title: title,
                    description: description,
                    imageLink: imageLink
                },
                slug: slug,
                creator: {
                    connect: {
                        id: getUser?.id
                    }
                }
            },
        });
        if(!createNote){
            return {
                error: "Internal database error"
            }
        }
        return {
            success: "note initialized, your content board is loading",
            redirectedTo: `/lggdn/user/notes/${createNote.id}/${createNote.slug}`
        }
    }catch(error){
        console.log(error);
        return {
            error: "Internal server error"
        }
    }
}