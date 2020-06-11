const initialState = {
  theme: 'light',
};

export default function themeReducer({theme}, action) {
  switch (action.type) {
    case "SET_THEME":
      return {
        theme: theme === 'light' ? 'dark' : 'light',
      };

    default:
      return initialState;
  }
}
