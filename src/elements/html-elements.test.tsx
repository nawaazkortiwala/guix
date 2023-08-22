import '@testing-library/jest-dom'
import 'jest-styled-components'

import React from 'react'
import renderer from 'react-test-renderer'

import defaultTheme from '../context/default-theme'
import ThemeProvider from '../context/provider'
import { CSSProperties } from '../types/css-types'
// import extendTheme from '../utils/extend-theme'
import { Div } from './html-elements'

describe('Block has given styles', () => {
  it('should render with specific CSS properties', () => {
    const props: CSSProperties<{ colors: { primary: string } }> = {
      $alignItems: 'center',
      $backgroundColor: ({ theme }) => theme.colors.primary,
      $color: 'white',
      $style: ({ context }) => {
        return {
          $borderColor: context.activeTheme === 'light' ? 'red' : 'green',
          $hover: {
            $backgroundColor: 'blue',
          },
        }
      },
    }
    const tree = renderer
      .create(
        <ThemeProvider
          theme={{
            light: defaultTheme,
            dark: defaultTheme,
          }}
          activeTheme="light"
          themeModes={['light', 'dark']}
        >
          <Div
            data-testid="block"
            {...props}
            $backgroundColor={({ theme }) => {
              return theme.colors.primary
            }}
          />
        </ThemeProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('background-color', '#007bff')
    expect(tree).toHaveStyleRule('background-color', 'blue', {
      modifier: ':hover',
    })
    expect(tree).toHaveStyleRule('color', 'white')
    expect(tree).toHaveStyleRule('border-color', 'red')
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Div />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
