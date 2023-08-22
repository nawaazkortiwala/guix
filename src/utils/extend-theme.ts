import defaultTheme from '../context/default-theme'
import { ThemeContent } from '../types/state-types'

const extendTheme = (callback: (theme: ThemeContent) => ThemeContent) => {
  return callback(defaultTheme)
}

export default extendTheme
