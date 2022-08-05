import { createContext, useContext, useMemo, useState } from "react";

const roleFilterContext = createContext();

export default function RoleFilterContextProvider({children}){
    const [roleState, setRoleState] = useState("")

    const contextValue = useMemo(() => {
        return {roleState, setRoleState}
    }, [roleState, setRoleState])

    return(
        <roleFilterContext.Provider value={contextValue}>
            {children}
        </roleFilterContext.Provider>
    )
}

export function useRoleFilterContext(){
    return useContext(roleFilterContext)
}