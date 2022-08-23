import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import useUser from '../auth/useUser'


const notifContext = createContext()

export default function NotificationFetcher({children}) {
    var socket
    const {user} = useUser()
    const [newNotif, setNewNotif] = useState(false)
    useEffect(() => {
        if(user){

            socket = new WebSocket(`ws://api.play1.musagreen.com/v1/users/notification/${user.uuid}/ws`);
        
            let connect = () => {
                console.log("Attempting Connection...");
            
                socket.onopen = () => {
                    console.log("Successfully Connected");
                };
                socket.onmessage = msg => {
                    console.log(msg);
                    console.log("flag",msg.data)
                };
            
                socket.onclose = event => {
                    console.log("Socket Closed Connection: ", event);
                };
            
                socket.onerror = error => {
                    console.log("Socket Error: ", error);
                };
            };
            connect()
        }
        
     
    },[user])
    // function sendMsg(msg){
    //     socket.send(msg);
    //   }

    const sendMsg = useCallback(
      ()=>socket.send("0"),
      [socket]
    )

    const stateMemo = useMemo(() => {
        return {newNotif, setNewNotif}
    }, [newNotif, setNewNotif])
    
    
  return (
    <notifContext.Provider value={{sendMsg, stateMemo}}>
        {children}
    </notifContext.Provider>
    
  )
}

export function useNotifFetcher(){
    return useContext(notifContext)
}
