import React, { createContext, useState } from 'react';

export const FlagContext = createContext();

const ContextProvider = ({ children }) => {
  const [isFlag, setFlag] = useState(true);
  const [filterItemName, setFilterItemName] = useState('');
  const [theme, setTheme] = useState(false)

  return <FlagContext.Provider value={{ isFlag, setFlag,filterItemName,setFilterItemName,theme,setTheme }}>{children}</FlagContext.Provider>;
};

export default ContextProvider; //jjjj
