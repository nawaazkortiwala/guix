import { CSSPropertiesWithTheme, CSSStyleFn } from '../types/css-types'
import { css } from 'styled-components'

export function convertCssTypePropsToCss(cssTypeProps: CSSPropertiesWithTheme): string {
  const cssRules = Object.entries(cssTypeProps)
    .filter(([key, value]) => key.match(/\$/) && value !== undefined && value !== null)
    .map(([key, value]) => {
      const cssProp = key.replace(/\$/, '').replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      const isStyleProp = cssProp === 'style'

      console.log(cssTypeProps.theme)

      if (isStyleProp)
        return convertCssTypePropsToCss({
          ...(value as CSSStyleFn)(cssTypeProps.theme.activeTheme, cssTypeProps.theme),
          theme: cssTypeProps.theme,
        })

      const _value =
        typeof value === 'function'
          ? value(cssTypeProps.theme.activeTheme, cssTypeProps.theme)
          : value

      return `${cssProp}: ${_value};`
    })

  return cssRules.join('\n')
}

export const utilStyleSheet = css`
  ${(props) => {
    return convertCssTypePropsToCss(props as CSSPropertiesWithTheme)
  }}
`
