import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <section className={`App ${theme}`}>
            {children}
            </section>
        </ThemeContext.Provider>
      );
    };
    

export const useTheme = () => useContext(ThemeContext);
