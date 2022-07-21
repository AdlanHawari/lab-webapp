const { createContext, useState, useMemo, useContext } = require("react");

const jenisPekerjaanFilterContext = createContext();

export default function JenisPekerjaanFilterContextProvider({children}){
    const [jenisPekerjaanState, setjenisPekerjaanState] = useState("")

    const contextValue = useMemo(() => {
        return {jenisPekerjaanState, setjenisPekerjaanState}
    }, [jenisPekerjaanState, setjenisPekerjaanState])

    return(
        <jenisPekerjaanFilterContext.Provider value={contextValue}>
            {children}
        </jenisPekerjaanFilterContext.Provider>
    )
}

export function useJenisPekerjaanFilterContext(){
    return useContext(jenisPekerjaanFilterContext)
}