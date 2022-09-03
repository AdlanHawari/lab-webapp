import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import useUser from '../auth/useUser'


const notifContext = createContext()

export default function NotificationFetcher({children}) {
    var socket
    const {user} = useUser()
    const [newNotif, setNewNotif] = useState(false)
    const [readState, setReadState] = useState(false)
    // useEffect(() => {
    //     if(user){

    //         socket = new WebSocket(`ws://api.play1.musagreen.com/v1/users/notification/${user.uuid}/ws`);
        
    //         let connect = () => {
    //             console.log("Attempting Connection...");
            
    //             socket.onopen = () => {
    //                 console.log("Successfully Connected");
    //             };
    //             socket.onmessage = msg => {
    //                 console.log(msg);
    //                 console.log("flag",msg.data)
    //             };
            
    //             socket.onclose = event => {
    //                 console.log("Socket Closed Connection: ", event);
    //             };
            
    //             socket.onerror = error => {
    //                 console.log("Socket Error: ", error);
    //             };
    //         };
    //         connect()
    //     }
        
     
    // },[user])
    // function sendMsg(msg){
    //     socket.send(msg);
    //   }

    // const sendMsg = useCallback(
    //   ()=>socket.send("0"),
    //   [socket]
    // )

    // useEffect(() => {
    //     socket = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_NOTIF}/${uuid}/ws`);
    // }, [])

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


    // const connect = useCallback(
    //   (socket) => {
    //     console.log("Attempting Connection...");
    
    //     socket.onopen = () => {
    //         console.log("Successfully Connected");
    //     };
    
    //     socket.onmessage = msg => {
    //         console.log(msg);
    //         if(msg.data=="1"){
    //             setNewNotif(true)
    //         }
    //         // setPesan(msg.data)
    //     };
    
    //     socket.onclose = event => {
    //         console.log("Socket Closed Connection: ", event);
    //     };
    
    //     socket.onerror = error => {
    //         console.log("Socket Error: ", error);
    //     };
    //   },
    //   [socket],
    // )
    
    

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

    // useEffect(() => {
    //     if(readState && socket){
    //         setNewNotif(false)
    //         socket.send("0")
    //         setReadState(false)

    //     }
    //     console.log("notif di useef read", newNotif)
      
    // }, [readState, socket])

    
    
    

    

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
