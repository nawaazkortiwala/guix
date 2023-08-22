import { ThemeContent } from '../types/state-types'

const defaultTheme: ThemeContent = {
  baseSize: 16,
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    tertiary: '#17a2b8',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
    custom: {
      myCustomColor: '#ff0000',
    },
  },
  fonts: {
    primary: 'Roboto, sans-serif',
    secondary: 'Arial, sans-serif',
    tertiary: 'Helvetica, sans-serif',
    custom: {
      myCustomFont: 'Open Sans, sans-serif',
    },
  },
  fontWeights: {
    extraLight: 200,
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    custom: {
      myCustomWeight: 500,
    },
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    md: 1.5,
    lg: 1.75,
    xl: 2,
    x2l: 2.5,
    x3l: 3,
    custom: {
      myCustomLineHeight: 1.8,
    },
  },
  letterSpacings: {
    xs: -0.5,
    sm: -0.25,
    md: 0,
    lg: 0.25,
    xl: 0.5,
    x2l: 1,
    x3l: 2,
    custom: {
      myCustomLetterSpacing: 0.1,
    },
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    x2l: 128,
    x3l: 256,
    custom: {
      myCustomSpace: 20,
    },
  },
  radii: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
    x2l: 64,
    x3l: 128,
    custom: {
      myCustomRadius: 10,
    },
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    x2l: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    x3l: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    custom: {
      myCustomShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
  },
  zIndices: {
    xs: 0,
    sm: 10,
    md: 100,
    lg: 1000,
    xl: 10000,
    x2l: 100000,
    x3l: 1000000,
    custom: {
      myCustomZIndex: 500,
    },
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    x2l: 1400,
    x3l: 1600,
    custom: {
      myCustomBreakpoint: 1000,
    },
  },
  mediaQueries: {
    xs: '@media (max-width: 576px)',
    sm: '@media (min-width: 576px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 992px)',
    xl: '@media (min-width: 1200px)',
    x2l: '@media (min-width: 1400px)',
    x3l: '@media (min-width: 1600px)',
    custom: {
      myCustomMediaQuery: '@media (min-width: 800px)',
    },
  },
  custom: {
    myCustomProperty: 'my custom value',
  },
}

export default defaultTheme
