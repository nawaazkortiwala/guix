import { Context, Theme, ThemeContent } from '../types/state-types'
import React, { FC, PropsWithChildren } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './default-theme'

type ThemeProviderProps = {
  theme: Theme | ThemeContent
  multiTheme?: {
    activeTheme: string
    themes: string[]
  }
}

const StyledThemeProviderWithContext = StyledThemeProvider as FC<
  PropsWithChildren<{
    theme: Context
  }>
>

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme,
  multiTheme,
}) => {
  if (!theme) {
    throw new Error('Theme must be provided')
  }

  if (multiTheme) {
    const themeModes = Object.keys(theme)

    if (!multiTheme.activeTheme || !multiTheme.themes.length) {
      throw new Error('Multi theme must have activeTheme and modes')
    }

    if (!multiTheme.themes.includes(multiTheme.activeTheme)) {
      throw new Error('Active theme must be included in modes')
    }

    if (!themeModes.every((mode) => multiTheme.themes.includes(mode))) {
      throw new Error('Theme modes must be included in modes')
    }
  } else {
    const defaultThemeKeys = Object.keys(defaultTheme)
    const themeKeys = Object.keys(theme)

    if (themeKeys.some((key) => !defaultThemeKeys.includes(key))) {
      throw new Error('Theme must have all default theme keys')
    }
  }

  const activeTheme = (
    multiTheme ? (theme as Theme)[multiTheme.activeTheme] : theme
  ) as ThemeContent

  return (
    <StyledThemeProviderWithContext
      theme={{
        activeTheme,
        theme,
        multiTheme: !!multiTheme,
        themes: multiTheme ? multiTheme.themes : [],
      }}
    >
      {children}
    </StyledThemeProviderWithContext>
  )
}

export default ThemeProvider
