import { useEffect, useState } from "react";
import { getSession } from "../actions/auth";
import { SessionType } from "../types";
interface SessionStateType {
    status: null | boolean;
    user: null | SessionType;
}
const useSession = ()=>{
    const [session, setSession] = useState<SessionStateType>({
        status: null,
        user: null
    });
    useEffect(()=>{
        const init = async ()=>{
            try{
                setSession({
                    status: true,
                    user: null
                })
                const response = await getSession();
                if(!response){
                    setSession({
                        status: false,
                        user: response
                    });
                }
            }catch(error){
                console.log(error);
            }   
        }
        init();
    }, []);
    return session;
}
export default useSession;