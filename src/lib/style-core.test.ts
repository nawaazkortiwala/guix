import defaultTheme from '../context/default-theme'
import { convertCssTypePropsToCss } from './style-core'
import { CSSPropertiesWithTheme } from '../types/css-types'

describe('convertCssTypePropsToCss', () => {
  it('should convert a single csstype property to CSS format', () => {
    const cssTypeProps = {
      $alignItems: 'center',
      theme: {
        theme: defaultTheme,
        multiTheme: false,
        activeTheme: defaultTheme,
        themes: [],
      },
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    // eslint-disable-next-line sonarjs/no-duplicate-string
    expect(cssRules).toEqual('align-items: center;')
  })

  it('should convert multiple csstype properties to CSS format', () => {
    const cssTypeProps = {
      $alignItems: 'center',
      $backgroundColor: 'red',
      theme: {
        theme: defaultTheme,
        multiTheme: false,
        activeTheme: defaultTheme,
        themes: [],
      },
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('align-items: center;\nbackground-color: red;')
  })

  it('should convert csstype properties with multiple words to CSS format', () => {
    const cssTypeProps = {
      $borderBottomLeftRadius: '10px',
      theme: {
        theme: defaultTheme,
        multiTheme: false,
        activeTheme: defaultTheme,
        themes: [],
      },
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('border-bottom-left-radius: 10px;')
  })

  it('should ignore non-csstype properties', () => {
    const cssTypeProps = {
      $alignItems: 'center',
      backgroundColor: 'red',
      theme: {
        theme: defaultTheme,
        multiTheme: false,
        activeTheme: defaultTheme,
        themes: [],
      },
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('align-items: center;')
  })

  it('should handle empty input', () => {
    const cssTypeProps = {
      theme: {
        theme: defaultTheme,
        multiTheme: false,
        activeTheme: defaultTheme,
        themes: [],
      },
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('')
  })

  it('should handle $style prop', () => {
    const cssTypeProps: CSSPropertiesWithTheme = {
      $style: (theme) => ({
        $alignItems: 'center',
        $backgroundColor: theme.colors.primary,
      }),
      theme: {
        theme: defaultTheme,
        multiTheme: false,
        activeTheme: defaultTheme,
        themes: [],
      },
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('align-items: center;\nbackground-color: #007bff;')
  })

  it('should correspond to context', () => {
    const cssTypeProps: CSSPropertiesWithTheme = {
      $style: (theme, context) => ({
        $alignItems: 'center',
        $backgroundColor: context.multiTheme ? theme.colors.primary : 'red',
      }),
      theme: {
        theme: defaultTheme,
        multiTheme: false,
        activeTheme: defaultTheme,
        themes: [],
      },
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('align-items: center;\nbackground-color: red;')
  })
})
