import React from 'react';

import { lightTheme } from './routes/App/Theme'

const ThemeContext = React.createContext(undefined)

function ThemeProvider({children}) {
  const state = React.useState(lightTheme)

  return (
    <ThemeContext.Provider value={state}>
        {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }