import { Context } from '../types/state-types'
import { FC, PropsWithChildren } from 'react'
type ThemeProviderProps = Context
declare const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>>
export default ThemeProvider
