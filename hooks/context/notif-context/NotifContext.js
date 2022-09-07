import { useNotifFetcher } from "hooks/fetcher/notification/NotificationFetcher";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const notifContext = createContext()

export default function NotifContextProvider({children}) {
    const socket  = useNotifFetcher()
    const [newNotif, setNewNotif] = useState(false)
    useEffect(() => {
        if(socket){
            socket.onopen = () => {
                console.log("ws connected")
            }
            socket.onmessage = (msg) => {
                console.log("ws message", msg)
                if(msg.data =="1"){
                    setNewNotif(true)
                }
            }
        }
      }, [socket])
    const contextValue = useMemo(() => {
        return {newNotif, setNewNotif}        
    }, [newNotif, setNewNotif])

    
  return (
    <notifContext.Provider value={contextValue}>{children}</notifContext.Provider>
  )
}

export function useNotifContext(){
    return useContext(notifContext)
}

