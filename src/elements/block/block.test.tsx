import { CSSProperties } from '@/types/css-types'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Block from './block'

describe('Block has given styles', () => {
  it('should render with specific CSS properties', () => {
    const props: CSSProperties = {
      $alignItems: 'center',
      $backgroundColor: 'red',
      $color: 'white',
    }
    const tree = renderer.create(<Block data-testid="block" {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('background-color', 'red')
    expect(tree).toHaveStyleRule('color', 'white')
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Block />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
