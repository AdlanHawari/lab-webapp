import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useUser from "../auth/useUser";

const notifFetcherContext = createContext()


export default function NotificationFetcherProvider({children}) {
    const {user, isValidating} = useUser()
    const [socket, setSocket] = useState() 
    
    useEffect(() => {
      
        if(!isValidating && user){
            
            console.log("user di context notif", user)
            setSocket(new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_NOTIF}/${user.data.uuid}/ws`))
        }
    }, [user, isValidating])
    
    // const wsInstance = useMemo(
    //     () => (typeof window != 'undefined' ? new Websocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_NOTIF}/${uuid}`) : null), 
    // [uuid]);
    const wsInstance = useMemo(() => {return socket}, [socket])
  return (
    <notifFetcherContext.Provider value={wsInstance}>{children}</notifFetcherContext.Provider>
  )
}

export function useNotifFetcher(){
    return useContext(notifFetcherContext)
}