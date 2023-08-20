import React, { FC } from 'react'
import { BlockProps } from './block.types'
import { StyledBlock } from './block.styled'

const Block: FC<BlockProps> = ({ children, ...props }) => {
  return <StyledBlock {...props}>{children}</StyledBlock>
}

export default Block
