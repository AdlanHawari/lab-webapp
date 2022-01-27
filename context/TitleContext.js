import { useRouter } from 'next/router';
import React, { createContext, useContext, useMemo, useState } from 'react';
import UrlSplitter from 'utils/UrlSplitter';

const TitleContext = createContext();

export default function TitleContextProvider({children}) {

    
    const router = useRouter();
    const splittedUrl = UrlSplitter(router.pathname)
    const text = splittedUrl[2];
    const title = text.replace("-"," ")

    const [titleState, settitleState] = useState(title);

    const contextValue = useMemo(() => {

        return [titleState, settitleState];
    },[titleState, settitleState]);

  return(
      <TitleContext.Provider value={contextValue}>
          {children}
      </TitleContext.Provider>
  )
}

export function useTitleContext(){
    return useContext(TitleContext)
}
