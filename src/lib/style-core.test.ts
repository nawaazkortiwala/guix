import { convertCssTypePropsToCss } from './style-core'

describe('convertCssTypePropsToCss', () => {
  it('should convert a single csstype property to CSS format', () => {
    const cssTypeProps = {
      $alignItems: 'center',
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('align-items: center;')
  })

  it('should convert multiple csstype properties to CSS format', () => {
    const cssTypeProps = {
      $alignItems: 'center',
      $backgroundColor: 'red',
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('align-items: center;\nbackground-color: red;')
  })

  it('should convert csstype properties with multiple words to CSS format', () => {
    const cssTypeProps = {
      $borderBottomLeftRadius: '10px',
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('border-bottom-left-radius: 10px;')
  })

  it('should ignore non-csstype properties', () => {
    const cssTypeProps = {
      $alignItems: 'center',
      backgroundColor: 'red',
    }
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('align-items: center;')
  })

  it('should handle empty input', () => {
    const cssTypeProps = {}
    const cssRules = convertCssTypePropsToCss(cssTypeProps)
    expect(cssRules).toEqual('')
  })
})
