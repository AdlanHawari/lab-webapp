// import { createContext, useContext, useEffect, useMemo } from "react";
// import useUser from "../auth/useUser";

// const notifWSContext = createContext()

// export default function NotificationFetcher({children}){

//     const {user} = useUser()
//     console.log("user ntws", user)
//     const wsInstance = useMemo(() => (typeof window != 'undefined' ? new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_NOTIF}/${user?.data.uuid}/ws`) : null), [])

//     useEffect(() => {
//         return () => {
//           wsInstance?.close();
//         };
//       }, []);

//     return <notifWSContext.Provider value={wsInstance}>{children}</notifWSContext.Provider>
// }

// export function useNotifFetcher(){
//     const context = useContext(notifWSContext)
//     if (context == undefined) {
//         throw new Error('useWS must be used within a WSProvider');
//       }
    
//     //   return context;
//     return context
// }
