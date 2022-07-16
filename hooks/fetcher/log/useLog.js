import { useContext } from "react"

export function LogProvider({children}){
    const log = useProvideLog()
    return <logContext.Provider value={log}>{children}</logContext.Provider>
}

export const useLog = () => {
    return useContext(logContext)
}

function useProvideLog(){

    return {

    }
}