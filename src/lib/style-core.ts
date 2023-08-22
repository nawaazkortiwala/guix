import { StandardProperties } from 'csstype'
import { css, RuleSet } from 'styled-components'

import {
  CSSAddOns,
  CSSAddOnsKeys,
  CSSFnArgs,
  CSSProperties,
  CSSPropertiesWithTheme,
  CSSStyleFn,
  CSSValue,
  CSSValueFn,
} from '../types/css-types'

export const getValue = <T extends keyof StandardProperties>(
  value: CSSValue<T> | CSSValueFn<T, unknown>,
  args: CSSFnArgs
): CSSValue<T> => (typeof value === 'function' ? value(args) : value)

export const getAddOnsValue = <T extends keyof CSSAddOns>(
  value: CSSAddOns[T] | CSSStyleFn,
  args: CSSFnArgs
): CSSProperties<unknown> => (typeof value === 'function' ? value(args) : value)

export const hoverStyles = (cssTypeProps: CSSPropertiesWithTheme) =>
  css`
    &:hover {
      ${convertCssTypePropsToCss({ ...cssTypeProps })}
    }
  `

export function convertCssTypePropsToCss(cssTypeProps: CSSPropertiesWithTheme): RuleSet[] {
  return Object.entries(cssTypeProps)
    .filter(([key, value]) => key.match(/\$/) && value !== undefined && value !== null)
    .map(([key, value]) => {
      const cssProp = key.replace(/\$/, '').replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      const args: CSSFnArgs = {
        theme: cssTypeProps.theme.theme[cssTypeProps.theme.activeTheme],
        context: cssTypeProps.theme,
      }

      switch (cssProp) {
        case 'style': {
          const cssProps = getAddOnsValue<CSSAddOnsKeys.style>(
            value as CSSAddOns[CSSAddOnsKeys.style],
            args
          )

          return convertCssTypePropsToCss({
            ...cssProps,
            theme: cssTypeProps.theme,
          })
        }

        case 'hover': {
          const cssProps = getAddOnsValue<CSSAddOnsKeys.hover>(
            value as CSSAddOns[CSSAddOnsKeys.hover],
            args
          )

          return hoverStyles({
            ...cssProps,
            theme: cssTypeProps.theme,
          })
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const _value = getValue<any>(value, args)

      return css`
        ${cssProp}: ${_value};
      `
    })
}

export const utilStyleSheet = css`
  ${(props) => {
    return convertCssTypePropsToCss(props as CSSPropertiesWithTheme)
  }}
`
