import { subMenu } from 'constants/SubmenuManajemenUji';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useMemo, useState } from 'react';
import UrlSplitter from 'utils/UrlSplitter';

const TitleContext = createContext();

export default function TitleContextProvider({children}) {

    
    // const router = useRouter();
    // const splittedUrl = UrlSplitter(router.pathname)
    // const text = splittedUrl[2];
    // const title = text.replace("-"," ")

    // const [titleState, settitleState] = useState(title);
    const [titleState, settitleState] = useState('');
    const [subTitle, setSubtitle] = useState(subMenu.UJI);

    const contextValue = useMemo(() => {

        return [titleState, settitleState, subTitle, setSubtitle];
    },[titleState, settitleState, subTitle, setSubtitle]);

  return(
      <TitleContext.Provider value={contextValue}>
          {children}
      </TitleContext.Provider>
  )
}

export function useTitleContext(){
    return useContext(TitleContext)
}
