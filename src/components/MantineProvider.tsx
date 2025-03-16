'use client';

import { MantineProvider as Provider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';

const theme = createTheme({
  // You can customize your theme here
  components: {
    Text: {
      defaultProps: {
        size: 'md',
      },
      styles: {
        root: {
          fontFamily: 'var(--font-manrope), sans-serif',
        }
      }
    },
  },

  colors: {
    brand: [
      "#e6f4ff",
      "#d0e5ff",
      "#a1c7fa",
      "#6fa8f5",
      "#458ef0",
      "#2b7dee",
      "#1a75ef",
      "#0763d5",
      "#0058bf",
      "#004caa"
    ]
  },
  

  fontFamily: 'var(--font-manrope), sans-serif',
  fontFamilyMonospace: 'var(--font-manrope), sans-serif',
  headings: {
    fontFamily: 'var(--font-manrope), sans-serif',
  },

  fontSizes: {
    sm: '11px',
    md: '16px',
    lg: '23px',
    xl: '32px',
    '2xl': '45px',
    '3xl': '64px',
    '4xl': '90px'
  },

});

export function MantineProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider theme={theme} defaultColorScheme="light">
      <Notifications />
      <NavigationProgress />
      {children}
    </Provider>
  );
}