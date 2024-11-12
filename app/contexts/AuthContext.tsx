"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getSession } from '../actions/auth';
import { JwtPayload } from 'jsonwebtoken';
import { SessionType } from '../types';
interface AuthContextProps {
    children: React.ReactNode;
}


interface SessionContextType {
    session: SessionType | undefined | null;
}


const SessionContext = createContext<SessionType | null | undefined>(null);

export const AuthContext: React.FC<AuthContextProps> = ({children}) => {
    const [session, setSession] = useState<SessionType | null | undefined>(null);
    useEffect(() => {
        async function fetchSession() {
            const response = await getSession();
            if(response){
                setSession(response);
            }
        }
        fetchSession();
    }, []);
    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
}
export const useSession = ()=>{
    const context = useContext(SessionContext);
    if(context===undefined){
        throw new Error("useSession must be within a session provider");
    }
    return context;
}