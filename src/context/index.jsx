import React from 'react';

export const ThemeContext = React.createContext();

export function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState('dark');

  const providerInterface = React.useMemo(
    () => ({
      isDarkTheme,
      setIsDarkTheme
    }),
    [isDarkTheme]
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={providerInterface}>{children}</ThemeContext.Provider>
  );
}
