// import { useNotifFetcher } from "hooks/fetcher/notification/NotificationFetcher"
// import { createContext, useCallback, useContext, useEffect, useState } from "react"

// const notifContext = createContext()

// export default function NotifContextProvider({children}) {
//     // const socket = useNotifFetcher()

//     const [newNotif, setNewNotif] = useState(false)

//     const onMessage = useCallback(
//       (message) => {
//         const data = JSON.parse(message?.data);
//         console.log("data ws", data)
//       },[],
//     )

//     const contextValue = useMemo(() => {
//         return {newNotif, setNewNotif}
//     }, [newNotif, setNewNotif])

//     useEffect(() => {
//       socket.addEventListener("message", onMessage)
    
//       return () => {
//         socket.removeEventListener("message", onMessage)
//       }
//     }, [socket, onMessage])
    
    
//   return (
//     <notifContext.Provider value={contextValue}>{children}</notifContext.Provider>
//   )
// }


// export function useNotifContext(){
//     return useContext(notifContext)
// }