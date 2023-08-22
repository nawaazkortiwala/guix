import { CSSProperties, Element } from '../types'
import { utilStyleSheet } from '../lib/style-core'
import { styled } from 'styled-components'

/**
 * Create an object containing all the html elements as styled components.
 * Instead of having the keys be the html element names, the keys are the Capitalized version of the html element names.
 * Each element has the props of utilStyleSheet, which is a function that takes in a CSSProperties object and returns a string of css rules.
 * Use styled-components's styled import to create the html element names
 */

export const A = styled.a<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export const Abbr = styled.abbr<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Address = styled.address<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Area = styled.area<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>

export const Article = styled.article<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Aside = styled.aside<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Audio = styled.audio<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>

export const B = styled.b<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Base = styled.base<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>

export const Bdi = styled.bdi<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Bdo = styled.bdo<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Big = styled.big<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Blockquote = styled.blockquote<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>

export const Body = styled.body<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>

export const Br = styled.br<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>

export const Button = styled.button<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Canvas = styled.canvas<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>

export const Caption = styled.caption<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Cite = styled.cite<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Code = styled.code<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Col = styled.col<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>

export const Colgroup = styled.colgroup<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>

export const Data = styled.data<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Datalist = styled.datalist<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>

export const Dd = styled.dd<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Del = styled.del<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.DelHTMLAttributes<HTMLElement>, HTMLElement>

export const Details = styled.details<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>

export const Dfn = styled.dfn<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Dialog = styled.dialog<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>

export const Div = styled.div<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Dl = styled.dl<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>

export const Dt = styled.dt<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Em = styled.em<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Embed = styled.embed<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>

export const Fieldset = styled.fieldset<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>

export const Figcaption = styled.figcaption<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Figure = styled.figure<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Footer = styled.footer<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Form = styled.form<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

export const H1 = styled.h1<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const H2 = styled.h2<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const H3 = styled.h3<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const H4 = styled.h4<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const H5 = styled.h5<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const H6 = styled.h6<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const Head = styled.head<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>

export const Header = styled.header<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Hgroup = styled.hgroup<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Hr = styled.hr<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>

export const Html = styled.html<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>

export const I = styled.i<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Iframe = styled.iframe<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>

export const Img = styled.img<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const Input = styled.input<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Ins = styled.ins<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.InsHTMLAttributes<HTMLElement>, HTMLElement>

export const Kbd = styled.kbd<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Keygen = styled.keygen<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>

export const Label = styled.label<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export const Legend = styled.legend<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>

export const Li = styled.li<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

export const Link = styled.link<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>

export const Main = styled.main<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Map = styled.map<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>

export const Mark = styled.mark<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Menu = styled.menu<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>

export const Menuitem = styled.menuitem<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Meta = styled.meta<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>

export const Meter = styled.meter<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.MeterHTMLAttributes<HTMLElement>, HTMLElement>

export const Nav = styled.nav<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Noscript = styled.noscript<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Object = styled.object<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>

export const Ol = styled.ol<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>

export const Optgroup = styled.optgroup<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>

export const Option = styled.option<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>

export const Output = styled.output<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.OutputHTMLAttributes<HTMLElement>, HTMLElement>

export const P = styled.p<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export const Param = styled.param<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>

export const Picture = styled.picture<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Pre = styled.pre<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>

export const Progress = styled.progress<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>

export const Q = styled.q<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>

export const Rp = styled.rp<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Rt = styled.rt<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Ruby = styled.ruby<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const S = styled.s<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Samp = styled.samp<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Script = styled.script<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>

export const Section = styled.section<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Select = styled.select<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export const Small = styled.small<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Source = styled.source<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>

export const Span = styled.span<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export const Strong = styled.strong<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Style = styled.style<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>

export const Sub = styled.sub<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Summary = styled.summary<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Sup = styled.sup<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Table = styled.table<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>

export const Tbody = styled.tbody<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>

export const Td = styled.td<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>

export const Textarea = styled.textarea<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export const Tfoot = styled.tfoot<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>

export const Th = styled.th<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>

export const Thead = styled.thead<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>

export const Time = styled.time<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.TimeHTMLAttributes<HTMLElement>, HTMLElement>

export const Title = styled.title<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>

export const Tr = styled.tr<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>

export const Track = styled.track<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>

export const U = styled.u<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Ul = styled.ul<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>

export const Var = styled.var<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>

export const Video = styled.video<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>

export const Wbr = styled.wbr<CSSProperties>`
  ${utilStyleSheet}
` as Element<React.HTMLAttributes<HTMLElement>, HTMLElement>
