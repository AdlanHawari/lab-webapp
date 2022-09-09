import { subMenu } from 'constants/SubmenuManajemenUji';
import React, { createContext, useContext, useMemo, useState } from 'react';

const TitleContext = createContext();

export default function TitleContextProvider({children}) {
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