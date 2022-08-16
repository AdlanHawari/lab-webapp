import { createContext, useContext, useMemo, useState } from "react";

const notifContext = createContext()

export default function NotifContextProvider({children}){
    const [newNotif, setNewNotif] = useState(false)

    const contextValue = useMemo(()=> {
        return {
            newNotif, setNewNotif
        }
        
    },[newNotif, setNewNotif])

    return(
        <notifContext.Provider value={contextValue}>
            {children}
        </notifContext.Provider>
    )
}

export function useNotifContext(){
    return useContext(notifContext)
}