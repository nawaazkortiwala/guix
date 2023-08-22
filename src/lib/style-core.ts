import { ThemeContent } from '../types'
import { CSSFnArgs, CSSPropertiesWithTheme, CSSStyleFn } from '../types/css-types'
import { css } from 'styled-components'

export function convertCssTypePropsToCss(cssTypeProps: CSSPropertiesWithTheme): string {
  const cssRules = Object.entries(cssTypeProps)
    .filter(([key, value]) => key.match(/\$/) && value !== undefined && value !== null)
    .map(([key, value]) => {
      const cssProp = key.replace(/\$/, '').replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      const isStyleProp = cssProp === 'style'
      const args: CSSFnArgs = {
        theme: cssTypeProps.theme.theme[cssTypeProps.theme.activeTheme] as ThemeContent,
        context: cssTypeProps.theme,
      }

      if (isStyleProp)
        return convertCssTypePropsToCss({
          ...(value as CSSStyleFn)(args),
          theme: cssTypeProps.theme,
        })

      const _value = typeof value === 'function' ? value(args) : value

      return `${cssProp}: ${_value};`
    })

  return cssRules.join('\n')
}

export const utilStyleSheet = css`
  ${(props) => {
    return convertCssTypePropsToCss(props as CSSPropertiesWithTheme)
  }}
`
