import React, { FC, PropsWithChildren } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { Context } from '../types/state-types'

type ThemeProviderProps = Context<unknown>

const StyledThemeProviderWithContext = StyledThemeProvider as FC<
  PropsWithChildren<{
    theme: Context<unknown>
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
