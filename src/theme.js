import { createTheme, Button, Card, Badge } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'indigo',
  primaryShade: 6,
  defaultRadius: 'md',
  fontFamily: 'Outfit, sans-serif',
  headings: {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '700',
  },
  colors: {
    ocean: [
      '#e0fbff',
      '#bef4ff',
      '#80eaff',
      '#3de0ff',
      '#00d8ff',
      '#00c4e0',
      '#0097ad',
      '#006b7a',
      '#003f47',
      '#001417',
    ],
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        variant: 'filled',
        loaderProps: { type: 'bars' },
      },
    }),
    Card: Card.extend({
      defaultProps: {
        shadow: 'sm',
        padding: 'lg',
        radius: 'md',
        withBorder: true,
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        variant: 'light',
      },
    }),
    
  },
});
