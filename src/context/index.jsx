import React, { useEffect, useMemo } from 'react';

export const ThemeContext = React.createContext();

export function ThemeContextProvider({ children }) {
  const getInitialTheme = () => {
    // Проверяем системные настройки
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Если сохраненная тема есть, используем ее, иначе - системную
    return savedTheme ? savedTheme : prefersDarkScheme ? 'dark' : 'light';
  };

  const [isDarkTheme, setIsDarkTheme] = React.useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme); // Сохраняем тему в локальном хранилище
    document.documentElement.setAttribute('data-color-scheme', isDarkTheme); // Устанавливаем атрибут на html
  }, [isDarkTheme]);

  const providerInterface = useMemo(
    () => ({
      isDarkTheme,
      setIsDarkTheme
    }),
    [isDarkTheme]
  );

  return (
    <ThemeContext.Provider value={providerInterface}>{children}</ThemeContext.Provider>
  );
}
