export declare type Attributes = Record<string, boolean | number | string>;

export declare type Child = string | number;
export declare type Children = Child[];

export function el(name: string, attrs: Attributes | Children, ...children: Children): string;

export function elc(name: string, attrs?: Attributes): string;

export declare type ContentFn = (attrs: Attributes | Children, ...children: Children) => string;

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

type ContentTagMap = Record<(typeof contentTags)[number], ContentFn>;

type SelfClosingTagMap = Record<(typeof selfClosingTags)[number], SelfClosingFn>;

export declare type TagMap = ContentTagMap & SelfClosingTagMap;

declare const tagMap: TagMap;

export default tagMap;
