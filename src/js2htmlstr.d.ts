export declare type Attributes = Record<string, boolean | number | string>;

export declare type Child = string | number;
export declare type Children = Child[];

export function el(
  name: string,
  attrs: Attributes | Children,
  ...children: Children
): string;

export function elc(name: string, attrs?: Attributes): string;

export declare type ContentFn = (
  attrs: Attributes | Children,
  ...children: Children
) => string;

export declare type SelfClosingFn = (attrs?: Attributes) => string;

//-----------------------------------------------------------------------------

const contentTags = [
  'a',
  'article',
  'aside',
  'audio',
  'b',
  'body',
  'blockquote',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'html',
  'i',
  'iframe',
  'label',
  'li',
  'main',
  'map',
  'mark',
  'menu',
  'nav',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'picture',
  'pre',
  'progress',
  'q',
  'script',
  'section',
  'select',
  'slot',
  'small',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'u',
  'ul',
  'var',
  'video'
] as const;

const selfClosingTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'source',
  'track',
  'wbr'
] as const;

/* With this approach, functions like `div` will have a type of `any`. */
type ContentTagMap = Record<(typeof contentTags)[number], ContentFn>;

type SelfClosingTagMap = Record<
  (typeof selfClosingTags)[number],
  SelfClosingFn
>;

export declare type TagMap = ContentTagMap & SelfClosingTagMap;

/*
// With this approach, functions like `div` will
// have a type of `ContentFn` or`SelfClosingFn`.
export declare type TagMap = {
  a: ContentFn;
  article: ContentFn;
  aside: ContentFn;
  audio: ContentFn;
  b: ContentFn;
  body: ContentFn;
  blockquote: ContentFn;
  button: ContentFn;
  canvas: ContentFn;
  caption: ContentFn;
  cite: ContentFn;
  code: ContentFn;
  colgroup: ContentFn;
  dd: ContentFn;
  details: ContentFn;
  dialog: ContentFn;
  div: ContentFn;
  dl: ContentFn;
  dt: ContentFn;
  em: ContentFn;
  fieldset: ContentFn;
  figcaption: ContentFn;
  figure: ContentFn;
  form: ContentFn;
  h1: ContentFn;
  h2: ContentFn;
  h3: ContentFn;
  h4: ContentFn;
  h5: ContentFn;
  h6: ContentFn;
  head: ContentFn;
  header: ContentFn;
  html: ContentFn;
  i: ContentFn;
  iframe: ContentFn;
  label: ContentFn;
  li: ContentFn;
  main: ContentFn;
  map: ContentFn;
  mark: ContentFn;
  menu: ContentFn;
  nav: ContentFn;
  object: ContentFn;
  ol: ContentFn;
  optgroup: ContentFn;
  option: ContentFn;
  output: ContentFn;
  p: ContentFn;
  picture: ContentFn;
  pre: ContentFn;
  progress: ContentFn;
  q: ContentFn;
  script: ContentFn;
  section: ContentFn;
  select: ContentFn;
  slot: ContentFn;
  small: ContentFn;
  span: ContentFn;
  strong: ContentFn;
  style: ContentFn;
  sub: ContentFn;
  summary: ContentFn;
  sup: ContentFn;
  table: ContentFn;
  tbody: ContentFn;
  td: ContentFn;
  template: ContentFn;
  textarea: ContentFn;
  tfoot: ContentFn;
  th: ContentFn;
  thead: ContentFn;
  time: ContentFn;
  title: ContentFn;
  tr: ContentFn;
  u: ContentFn;
  ul: ContentFn;
  var: ContentFn;
  video: ContentFn;

  br: SelfClosingFn;
  area: SelfClosingFn;
  base: SelfClosingFn;
  br: SelfClosingFn;
  col: SelfClosingFn;
  embed: SelfClosingFn;
  hr: SelfClosingFn;
  img: SelfClosingFn;
  input: SelfClosingFn;
  link: SelfClosingFn;
  meta: SelfClosingFn;
  source: SelfClosingFn;
  track: SelfClosingFn;
  wb: SelfClosingFn;
};
*/

declare const tagMap: TagMap;

export default tagMap;
