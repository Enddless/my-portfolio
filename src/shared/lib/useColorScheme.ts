import { useContext } from 'react';

import { ColorSchemeContext, type ColorSchemeContextValue } from '@/shared/config/color-scheme';

export function useColorScheme(): ColorSchemeContextValue {
  const context = useContext(ColorSchemeContext);

  if (!context) {
    throw new Error('useColorScheme должен вызываться внутри ColorSchemeProvider');
  }

  return context;
}