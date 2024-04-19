import React, {createContext, useContext, useState} from 'react';

const DarkModeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  return (
    <DarkModeContext.Provider value={{isDarkMode, toggleMode}}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
