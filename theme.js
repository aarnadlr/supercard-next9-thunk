import { theme } from '@chakra-ui/core';

// CSS-in-JS API INFO: https://styled-system.com/table/
// DEFAULT COLORS INFO: https://chakra-ui.com/theme#colors

const customTheme = {
  ...theme,

  colors: {
    ...theme.colors,
    march: 'green',
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    }
    // red:{
    //   400:'red'
    // }
  },

  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'Menlo, monospace'
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  lineHeights: {
    normal: 'normal',
    base: '1',
    shorter: '1.25',
    short: '1.375',
    half: '1.5',
    tall: '1.625',
    taller: '2'
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
};

export default customTheme;
