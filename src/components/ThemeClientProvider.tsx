'use client';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/themes';
import { useTheme } from '@/context/ThemeContext';

export const ThemeClientProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </StyledThemeProvider>
  );
};