'use strict'
var e = require('styled-components'),
  t = require('react')
const s = {
    baseSize: 16,
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      tertiary: '#17a2b8',
      success: '#28a745',
      warning: '#ffc107',
      danger: '#dc3545',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40',
      white: '#ffffff',
      black: '#000000',
      custom: { myCustomColor: '#ff0000' },
    },
    fonts: {
      primary: 'Roboto, sans-serif',
      secondary: 'Arial, sans-serif',
      tertiary: 'Helvetica, sans-serif',
      custom: { myCustomFont: 'Open Sans, sans-serif' },
    },
    fontWeights: {
      extraLight: 200,
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      custom: { myCustomWeight: 500 },
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      md: 1.5,
      lg: 1.75,
      xl: 2,
      x2l: 2.5,
      x3l: 3,
      custom: { myCustomLineHeight: 1.8 },
    },
    letterSpacings: {
      xs: -0.5,
      sm: -0.25,
      md: 0,
      lg: 0.25,
      xl: 0.5,
      x2l: 1,
      x3l: 2,
      custom: { myCustomLetterSpacing: 0.1 },
    },
    space: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 32,
      xl: 64,
      x2l: 128,
      x3l: 256,
      custom: { myCustomSpace: 20 },
    },
    radii: {
      xs: 2,
      sm: 4,
      md: 8,
      lg: 16,
      xl: 32,
      x2l: 64,
      x3l: 128,
      custom: { myCustomRadius: 10 },
    },
    shadows: {
      xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      x2l: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      x3l: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      custom: { myCustomShadow: '0 0 10px rgba(0, 0, 0, 0.1)' },
    },
    zIndices: {
      xs: 0,
      sm: 10,
      md: 100,
      lg: 1e3,
      xl: 1e4,
      x2l: 1e5,
      x3l: 1e6,
      custom: { myCustomZIndex: 500 },
    },
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      x2l: 1400,
      x3l: 1600,
      custom: { myCustomBreakpoint: 1e3 },
    },
    mediaQueries: {
      xs: '@media (max-width: 576px)',
      sm: '@media (min-width: 576px)',
      md: '@media (min-width: 768px)',
      lg: '@media (min-width: 992px)',
      xl: '@media (min-width: 1200px)',
      x2l: '@media (min-width: 1400px)',
      x3l: '@media (min-width: 1600px)',
      custom: { myCustomMediaQuery: '@media (min-width: 800px)' },
    },
    custom: { myCustomProperty: 'my custom value' },
  },
  r = e.ThemeProvider
function o(e) {
  return Object.entries(e)
    .filter(([e, t]) => e.match(/\$/) && null != t)
    .map(([t, s]) => {
      const r = t.replace(/\$/, '').replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)
      if ('style' === r)
        return o(
          Object.assign(Object.assign({}, s(e.theme.theme, e.theme.context)), { theme: e.theme })
        )
      return `${r}: ${'function' == typeof s ? s(e.theme.theme, e.theme.context) : s};`
    })
    .join('\n')
}
'function' == typeof SuppressedError && SuppressedError
const l = e.css`
  ${(e) => o(e)}
`,
  d = e.styled.div`
  ${l}
`,
  p = e.styled.a`
  ${l}
`,
  x = e.styled.abbr`
  ${l}
`,
  i = e.styled.address`
  ${l}
`,
  y = e.styled.area`
  ${l}
`,
  a = e.styled.article`
  ${l}
`,
  m = e.styled.aside`
  ${l}
`,
  n = e.styled.audio`
  ${l}
`,
  $ = e.styled.b`
  ${l}
`,
  c = e.styled.base`
  ${l}
`,
  u = e.styled.bdi`
  ${l}
`,
  h = e.styled.bdo`
  ${l}
`,
  b = e.styled.big`
  ${l}
`,
  g = e.styled.blockquote`
  ${l}
`,
  f = e.styled.body`
  ${l}
`,
  v = e.styled.br`
  ${l}
`,
  w = e.styled.button`
  ${l}
`,
  T = e.styled.canvas`
  ${l}
`,
  O = e.styled.caption`
  ${l}
`,
  S = e.styled.cite`
  ${l}
`,
  C = e.styled.code`
  ${l}
`,
  k = e.styled.col`
  ${l}
`,
  j = e.styled.colgroup`
  ${l}
`,
  H = e.styled.data`
  ${l}
`,
  B = e.styled.datalist`
  ${l}
`,
  E = e.styled.dd`
  ${l}
`,
  P = e.styled.del`
  ${l}
`,
  A = e.styled.details`
  ${l}
`,
  D = e.styled.dfn`
  ${l}
`,
  M = e.styled.dialog`
  ${l}
`,
  I = e.styled.div`
  ${l}
`,
  L = e.styled.dl`
  ${l}
`,
  F = e.styled.dt`
  ${l}
`,
  q = e.styled.em`
  ${l}
`,
  R = e.styled.embed`
  ${l}
`,
  Q = e.styled.fieldset`
  ${l}
`,
  W = e.styled.figcaption`
  ${l}
`,
  z = e.styled.figure`
  ${l}
`,
  K = e.styled.footer`
  ${l}
`,
  N = e.styled.form`
  ${l}
`,
  U = e.styled.h1`
  ${l}
`,
  V = e.styled.h2`
  ${l}
`,
  Z = e.styled.h3`
  ${l}
`,
  G = e.styled.h4`
  ${l}
`,
  J = e.styled.h5`
  ${l}
`,
  X = e.styled.h6`
  ${l}
`,
  Y = e.styled.head`
  ${l}
`,
  _ = e.styled.header`
  ${l}
`,
  ee = e.styled.hgroup`
  ${l}
`,
  te = e.styled.hr`
  ${l}
`,
  se = e.styled.html`
  ${l}
`,
  re = e.styled.i`
  ${l}
`,
  oe = e.styled.iframe`
  ${l}
`,
  le = e.styled.img`
  ${l}
`,
  de = e.styled.input`
  ${l}
`,
  pe = e.styled.ins`
  ${l}
`,
  xe = e.styled.kbd`
  ${l}
`,
  ie = e.styled.keygen`
  ${l}
`,
  ye = e.styled.label`
  ${l}
`,
  ae = e.styled.legend`
  ${l}
`,
  me = e.styled.li`
  ${l}
`,
  ne = e.styled.link`
  ${l}
`,
  $e = e.styled.main`
  ${l}
`,
  ce = e.styled.map`
  ${l}
`,
  ue = e.styled.mark`
  ${l}
`,
  he = e.styled.menu`
  ${l}
`,
  be = e.styled.menuitem`
  ${l}
`,
  ge = e.styled.meta`
  ${l}
`,
  fe = e.styled.meter`
  ${l}
`,
  ve = e.styled.nav`
  ${l}
`,
  we = e.styled.noscript`
  ${l}
`,
  Te = e.styled.object`
  ${l}
`,
  Oe = e.styled.ol`
  ${l}
`,
  Se = e.styled.optgroup`
  ${l}
`,
  Ce = e.styled.option`
  ${l}
`,
  ke = e.styled.output`
  ${l}
`,
  je = e.styled.p`
  ${l}
`,
  He = e.styled.param`
  ${l}
`,
  Be = e.styled.picture`
  ${l}
`,
  Ee = e.styled.pre`
  ${l}
`,
  Pe = e.styled.progress`
  ${l}
`,
  Ae = e.styled.q`
  ${l}
`,
  De = e.styled.rp`
  ${l}
`,
  Me = e.styled.rt`
  ${l}
`,
  Ie = e.styled.ruby`
  ${l}
`,
  Le = e.styled.s`
  ${l}
`,
  Fe = e.styled.samp`
  ${l}
`,
  qe = e.styled.script`
  ${l}
`,
  Re = e.styled.section`
  ${l}
`,
  Qe = e.styled.select`
  ${l}
`,
  We = e.styled.small`
  ${l}
`,
  ze = e.styled.source`
  ${l}
`,
  Ke = e.styled.span`
  ${l}
`,
  Ne = e.styled.strong`
  ${l}
`,
  Ue = e.styled.style`
  ${l}
`,
  Ve = e.styled.sub`
  ${l}
`,
  Ze = e.styled.summary`
  ${l}
`,
  Ge = e.styled.sup`
  ${l}
`,
  Je = e.styled.table`
  ${l}
`,
  Xe = e.styled.tbody`
  ${l}
`,
  Ye = e.styled.td`
  ${l}
`,
  _e = e.styled.textarea`
  ${l}
`,
  et = e.styled.tfoot`
  ${l}
`,
  tt = e.styled.th`
  ${l}
`,
  st = e.styled.thead`
  ${l}
`,
  rt = e.styled.time`
  ${l}
`,
  ot = e.styled.title`
  ${l}
`,
  lt = e.styled.tr`
  ${l}
`,
  dt = e.styled.track`
  ${l}
`,
  pt = e.styled.u`
  ${l}
`,
  xt = e.styled.ul`
  ${l}
`,
  it = e.styled.var`
  ${l}
`,
  yt = e.styled.video`
  ${l}
`,
  at = e.styled.wbr`
  ${l}
`
Object.defineProperty(exports, 'ThemeContext', {
  enumerable: !0,
  get: function () {
    return e.ThemeContext
  },
}),
  (exports.A = p),
  (exports.Abbr = x),
  (exports.Address = i),
  (exports.Area = y),
  (exports.Article = a),
  (exports.Aside = m),
  (exports.Audio = n),
  (exports.B = $),
  (exports.Base = c),
  (exports.Bdi = u),
  (exports.Bdo = h),
  (exports.Big = b),
  (exports.Block = (e) => {
    var { children: s } = e,
      r = (function (e, t) {
        var s = {}
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r])
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (s[r[o]] = e[r[o]])
        }
        return s
      })(e, ['children'])
    return t.createElement(d, Object.assign({}, r), s)
  }),
  (exports.Blockquote = g),
  (exports.Body = f),
  (exports.Br = v),
  (exports.Button = w),
  (exports.Canvas = T),
  (exports.Caption = O),
  (exports.Cite = S),
  (exports.Code = C),
  (exports.Col = k),
  (exports.Colgroup = j),
  (exports.Data = H),
  (exports.Datalist = B),
  (exports.Dd = E),
  (exports.Del = P),
  (exports.Details = A),
  (exports.Dfn = D),
  (exports.Dialog = M),
  (exports.Div = I),
  (exports.Dl = L),
  (exports.Dt = F),
  (exports.Em = q),
  (exports.Embed = R),
  (exports.Fieldset = Q),
  (exports.Figcaption = W),
  (exports.Figure = z),
  (exports.Footer = K),
  (exports.Form = N),
  (exports.H1 = U),
  (exports.H2 = V),
  (exports.H3 = Z),
  (exports.H4 = G),
  (exports.H5 = J),
  (exports.H6 = X),
  (exports.Head = Y),
  (exports.Header = _),
  (exports.Hgroup = ee),
  (exports.Hr = te),
  (exports.Html = se),
  (exports.I = re),
  (exports.Iframe = oe),
  (exports.Img = le),
  (exports.Input = de),
  (exports.Ins = pe),
  (exports.Kbd = xe),
  (exports.Keygen = ie),
  (exports.Label = ye),
  (exports.Legend = ae),
  (exports.Li = me),
  (exports.Link = ne),
  (exports.Main = $e),
  (exports.Map = ce),
  (exports.Mark = ue),
  (exports.Menu = he),
  (exports.Menuitem = be),
  (exports.Meta = ge),
  (exports.Meter = fe),
  (exports.Nav = ve),
  (exports.Noscript = we),
  (exports.Object = Te),
  (exports.Ol = Oe),
  (exports.Optgroup = Se),
  (exports.Option = Ce),
  (exports.Output = ke),
  (exports.P = je),
  (exports.Param = He),
  (exports.Picture = Be),
  (exports.Pre = Ee),
  (exports.Progress = Pe),
  (exports.Q = Ae),
  (exports.Rp = De),
  (exports.Rt = Me),
  (exports.Ruby = Ie),
  (exports.S = Le),
  (exports.Samp = Fe),
  (exports.Script = qe),
  (exports.Section = Re),
  (exports.Select = Qe),
  (exports.Small = We),
  (exports.Source = ze),
  (exports.Span = Ke),
  (exports.Strong = Ne),
  (exports.Style = Ue),
  (exports.Sub = Ve),
  (exports.Summary = Ze),
  (exports.Sup = Ge),
  (exports.Table = Je),
  (exports.Tbody = Xe),
  (exports.Td = Ye),
  (exports.Textarea = _e),
  (exports.Tfoot = et),
  (exports.Th = tt),
  (exports.Thead = st),
  (exports.ThemeProvider = ({ children: e, theme: o, multiTheme: l }) => {
    if (!o) throw new Error('Theme must be provided')
    if (l) {
      const e = Object.keys(o)
      if (!l.activeTheme || !l.modes.length)
        throw new Error('Multi theme must have activeTheme and modes')
      if (!l.modes.includes(l.activeTheme))
        throw new Error('Active theme must be included in modes')
      if (!e.every((e) => l.modes.includes(e)))
        throw new Error('Theme modes must be included in modes')
    } else {
      const e = Object.keys(s)
      if (Object.keys(o).some((t) => !e.includes(t)))
        throw new Error('Theme must have all default theme keys')
    }
    const d = l ? o[l.activeTheme] : o
    return t.createElement(r, { theme: { theme: d, context: { theme: o, multiTheme: l } } }, e)
  }),
  (exports.Time = rt),
  (exports.Title = ot),
  (exports.Tr = lt),
  (exports.Track = dt),
  (exports.U = pt),
  (exports.Ul = xt),
  (exports.Var = it),
  (exports.Video = yt),
  (exports.Wbr = at),
  (exports.extendTheme = (e) => e(s))
//# sourceMappingURL=index.js.map
