import React, { useContext, useReducer, useLayoutEffect } from 'react';
import ThemeContext from '../../context';

import themeReducer from '../../reducer';

const DARK_MODE_CLASS = 'dark-mode';

export default function App({ children }) {
  const initialState = useContext(ThemeContext);
  const [state, dispatch] = useReducer(themeReducer, initialState);
  
  const {
     theme,
  } = state;

  useLayoutEffect(() => {
    switch (theme) {
      case 'dark':
        document.getElementById('root').classList.add(DARK_MODE_CLASS);
        break;
      default:
        document.getElementById('root').classList.remove(DARK_MODE_CLASS);
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch}}> 
        {children}  
    </ThemeContext.Provider>
  )
}
