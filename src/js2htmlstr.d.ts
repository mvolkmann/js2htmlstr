export declare type Attributes = Object<string, boolean | number | string>;

export declare type Child = string | number;

export declare type ContentFn = (
  attrs: Attributes | Children,
  ...children: Child[]
) => string;

export declare type SelfClosingFn = (attrs?: Attributes) => string;

export declare type Elements = {
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

export function el(
  name: string,
  attrs: Attributes | Child[],
  ...children: Child[]
): string;

export function elc(name: string, attrs?: Attributes): string;

declare const elements: Elements;
export default elements;
