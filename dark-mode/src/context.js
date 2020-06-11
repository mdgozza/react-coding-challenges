import React from 'react';

const initialState = {theme: 'light'};

const ThemeContext = React.createContext(initialState);

export default ThemeContext;