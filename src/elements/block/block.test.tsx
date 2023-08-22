import { CSSProperties } from '../../types/css-types'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import Block from './block'
import ThemeProvider from '../../context/provider'
import extendTheme from '../../utils/extend-theme'

describe('Block has given styles', () => {
  it('should render with specific CSS properties', () => {
    const props: CSSProperties = {
      $alignItems: 'center',
      $backgroundColor: (theme) => theme.colors.primary,
      $color: 'white',
      $style: (_, context) => {
        return {
          $borderColor: context.multiTheme ? 'red' : 'green',
        }
      },
    }
    const tree = renderer
      .create(
        <ThemeProvider
          theme={{
            light: extendTheme((theme) => theme),
            dark: extendTheme((theme) => theme),
          }}
          multiTheme={{
            themes: ['light', 'dark'],
            activeTheme: 'light',
          }}
        >
          <Block data-testid="block" {...props} />
        </ThemeProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('background-color', '#007bff')
    expect(tree).toHaveStyleRule('color', 'white')
    expect(tree).toHaveStyleRule('border-color', 'red')
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Block />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
