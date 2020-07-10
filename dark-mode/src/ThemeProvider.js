import React from 'react';

import { lightTheme } from './routes/App/Theme'

const ThemeContext = React.createContext(undefined)
const ThemeDispatcher = React.createContext(undefined)

function ThemeProvider({children}) {
  const [theme, setTheme] = React.useState(lightTheme)

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatcher.Provider value={setTheme}>
        {children}
      </ThemeDispatcher.Provider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider, ThemeDispatcher }