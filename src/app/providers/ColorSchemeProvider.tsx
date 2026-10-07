import { useEffect, useMemo, useState, type ReactNode } from 'react';

import { ColorSchemeContext, type ColorScheme } from '@/shared/config/color-scheme';

const LOGO_PATH =
  'm193.39355,1544.63721c-11,-2 -44,-9 -72,-15c-29,-6 -55,-14 -57,-18c-3,-4 4,-104 14,-222c11,-118 20,-220 20,-228c0,-19 70,-7 136,23c72,33 129,88 164,160c37,74 46,143 31,218c-11,50 -16,58 -44,68c-35,12 -161,22 -192,14zm88,-75c12,-17 21,-49 24,-92c5,-61 3,-72 -30,-141c-33,-69 -82,-135 -93,-124c-2,3 5,87 16,188c11,100 20,187 20,192c0,19 43,2 63,-23z';

function applyFavicon(accentColor: string) {
  const svg = `<svg width="50" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 60" preserveAspectRatio="xMidYMid meet"><g transform="translate(0 160) scale(0.1 -0.1)" fill="${accentColor}"><path d="${LOGO_PATH}" /></g></svg>`;

  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  const favicon = document.querySelector<HTMLLinkElement>('link[rel*="icon"]');

  favicon?.setAttribute('href', url);

  return () => URL.revokeObjectURL(url);
}

interface ColorSchemeProviderProps {
  children: ReactNode;
}

export function ColorSchemeProvider({ children }: ColorSchemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', colorScheme);

    const accentColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--cl-accent')
      .trim();

    return applyFavicon(accentColor);
  }, [colorScheme]);

  const value = useMemo(
    () => ({ colorScheme, setColorScheme }),
    [colorScheme]
  );

  return <ColorSchemeContext.Provider value={value}>{children}</ColorSchemeContext.Provider>;
}