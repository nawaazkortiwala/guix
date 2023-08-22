import { ThemeContent } from '../types/state-types'
declare const extendTheme: (callback: (theme: ThemeContent) => ThemeContent) => ThemeContent
export default extendTheme
