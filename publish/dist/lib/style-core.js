import { css } from 'styled-components'
export function convertCssTypePropsToCss(cssTypeProps) {
  const cssRules = Object.entries(cssTypeProps)
    .filter(([key]) => key.match(/\$/))
    .map(([key, value]) => {
      const cssProp = key.replace(/\$/, '').replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      return `${cssProp}: ${value};`
    })
  return cssRules.join('\n')
}
export const utilStyleSheet = css`
  ${(props) => {
    // console.log(convertCssTypePropsToCss(props as CSSProperties))
    return convertCssTypePropsToCss(props)
  }}
`
