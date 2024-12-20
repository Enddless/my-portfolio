import React, { useEffect, useMemo } from 'react';

export const ThemeContext = React.createContext();

export function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', isDarkTheme);

    const accentColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--cl-accent')
      .trim();

    // SVG как строка
    const svgString = `
      <svg width="50" height="60" xmlns="http://www.w3.org/2000/svg" version="1.0" preserveAspectRatio="xMidYMid meet">
        <g id="Layer_1">
          <title>Layer 1</title>
          <g id="svg_1">
            <g id="svg_2" transform="translate(0 160) scale(0.1 -0.1)" fill="${accentColor}">
              <path id="svg_3" d="m193.39355,1544.63721c-11,-2 -44,-9 -72,-15c-29,-6 -55,-14 -57,-18c-3,-4 4,-104 14,-222c11,-118 20,-220 20,-228c0,-19 70,-7 136,23c72,33 129,88 164,160c37,74 46,143 31,218c-11,50 -16,58 -44,68c-35,12 -161,22 -192,14zm88,-75c12,-17 21,-49 24,-92c5,-61 3,-72 -30,-141c-33,-69 -82,-135 -93,-124c-2,3 5,87 16,188c11,100 20,187 20,192c0,19 43,2 63,-23z" />
            </g>
          </g>
        </g>
      </svg>
    `;

    // Создаем Blob и обновляем href
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    const faviconLink = document.querySelector("link[rel*='icon']");
    faviconLink.setAttribute('href', url);
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
