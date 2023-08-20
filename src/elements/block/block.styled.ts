import { utilStyleSheet } from '../../lib/style-core'
import { CSSProperties } from '../../types/css-types'
import styled from 'styled-components'

export const StyledBlock = styled.div<CSSProperties>`
  ${utilStyleSheet}
`
