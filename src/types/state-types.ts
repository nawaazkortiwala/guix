export type ThemeContent = {
  baseSize: number // px
  colors: {
    primary: string
    secondary: string
    tertiary: string
    success: string
    warning: string
    danger: string
    info: string
    light: string
    dark: string
    white: string
    black: string
    custom: Record<string, string>
  }
  fonts: {
    primary: string
    secondary: string
    tertiary: string
    custom: Record<string, string>
  }
  fontWeights: {
    extraLight: number
    light: number
    normal: number
    semiBold: number
    bold: number
    extraBold: number
    custom: Record<string, number>
  }
  lineHeights: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    x2l: number
    x3l: number
    custom: Record<string, number>
  }
  letterSpacings: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    x2l: number
    x3l: number
    custom: Record<string, number>
  }
  space: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    x2l: number
    x3l: number
    custom: Record<string, number>
  }
  radii: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    x2l: number
    x3l: number
    custom: Record<string, number>
  }
  shadows: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    x2l: string
    x3l: string
    custom: Record<string, string>
  }
  zIndices: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    x2l: number
    x3l: number
    custom: Record<string, number>
  }
  breakpoints: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    x2l: number
    x3l: number
    custom: Record<string, number>
  }
  mediaQueries: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    x2l: string
    x3l: string
    custom: Record<string, string>
  }
  custom: Record<string, unknown>
}

export type ThemeMode = string

export type Theme = Record<ThemeMode, ThemeContent>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Context = {
  theme: Theme
  activeTheme: ThemeMode
  themeModes: ThemeMode[]
}
