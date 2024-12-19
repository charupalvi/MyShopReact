// import { createContext, useState } from "react";

// export const ThemeContext = createContext();
//  export function ThemeProvider(props){
//     const [theme,setTheme] = useState('light');
//     return (
//         <ThemeContext.Provider value={{theme,setTheme}}>
//             { props.children }
//         </ThemeContext.Provider>
//     )
//  }


// import React, { createContext, useState } from 'react';

// // Create ThemeContext
// export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light'); // Set initial theme to 'light'

//   // Function to toggle between light and dark themes
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }


// import React, { createContext, useReducer, useState } from 'react';
// export const ThemeContext = createContext();
// const themeReducer =()=>{}

// export function ThemeProvider(props){
//   const [state,dispatch] =useReducer(themeReducer,{theme:'light'});
//   return(
//     <ThemeContext.Provider value={{theme,setTheme}}>
//       { props.children }
//     </ThemeContext.Provider>
//   )
// }



import React, { createContext, useReducer } from 'react';

// Create ThemeContext
export const ThemeContext = createContext();

// Reducer function to handle theme changes
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        // theme:action.payload  //maam code
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

// ThemeProvider Component
export function ThemeProvider({ children }) {
  // Initialize useReducer with the themeReducer and default state
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  // Function to dispatch the toggle theme action
  const toggleTheme = (theme) => {
    dispatch({ type: 'TOGGLE_THEME',payload:theme });
  };

  return (
    // <ThemeContext.Provider value={{ ...state, toggleTheme }}>  //maam code
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
