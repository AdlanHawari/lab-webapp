import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import useUser from '../auth/useUser'


const notifContext = createContext()

export default function NotificationFetcher({children}) {
    var socket
    const {user} = useUser()
    const [newNotif, setNewNotif] = useState(false)
    const [readState, setReadState] = useState(false)
    

    let connect = (socket) => {
        console.log("Attempting Connection...");
    
        socket.onopen = () => {
            console.log("Successfully Connected");
        };
    
        socket.onmessage = msg => {
            console.log(msg);
            // setPesan(msg.data)
            if(msg.data=="1"){
                setNewNotif(true)
            }
        };
    
        socket.onclose = event => {
            console.log("Socket Closed Connection: ", event);
        };
    
        socket.onerror = error => {
            console.log("Socket Error: ", error);
        };
        };

    

    useEffect(() => {
    //   console.log("notif_fetcher", user)
        if(user){
            console.log("notif_fetcher", user.data.uuid)
            
            socket = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_NOTIF}/${user.data.uuid}/ws`);

        }
    }, [user])

    useEffect(() => {
        if(socket){
            console.log("socket ada")
            connect(socket)

           
        }
        console.log("socket", socket)
    }, [socket])

    const contextValue = useMemo(() => {
        return {newNotif, setNewNotif, readState, setReadState, socket}
    }, [newNotif, setNewNotif, readState, setReadState, socket])
    
  return (
    <notifContext.Provider value={contextValue}>
        {children}
    </notifContext.Provider>
    
  )
}

export function useNotifFetcher(){
    return useContext(notifContext)
}
