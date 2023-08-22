import { Context } from '../types/state-types'
import React, { FC, PropsWithChildren } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

type ThemeProviderProps = Context

const StyledThemeProviderWithContext = StyledThemeProvider as FC<
  PropsWithChildren<{
    theme: Context
  }>
>

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme,
  activeTheme,
  themeModes,
}) => {
  if (!theme) {
    throw new Error('ThemeProvider requires a theme prop')
  }

  if (!activeTheme) {
    throw new Error('ThemeProvider requires an activeTheme prop')
  }

  if (!themeModes) {
    throw new Error('ThemeProvider requires a themeModes prop')
  }

  return (
    <StyledThemeProviderWithContext
      theme={{
        theme,
        activeTheme,
        themeModes,
      }}
    >
      {children}
    </StyledThemeProviderWithContext>
  )
}

export default ThemeProvider
