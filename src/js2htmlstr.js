import {HtmlValidate} from 'html-validate';

/**
 * This defines functions that make it easy to
 * generate strings of HTML from JavaScript.
 */

/** @typedef {import('./types.d.ts').Attributes} Attributes } */
/** @typedef {import('./types.d.ts').Child} Child } */
/** @typedef {import('./types.d.ts').ContentFn} ContentFn } */
/** @typedef {import('./types.d.ts').Report} Report } */
/** @typedef {import('./types.d.ts').SelfClosingFn} SelfClosingFn } */

/**
 * Generates an HTML string for an element with a close tag.
 * @param {string} name
 * @param {Attributes | Child[]} [attrs]
 * @param {Child[]} children
 * @returns string - the HTML
 */
export function el(name, attrs, ...children) {
  // Begin the opening tag.
  /** @type {string} */
  let html = '<' + name;

  if (typeof attrs === 'object' && !Array.isArray(attrs)) {
    // Add attributes to the opening tag.
    for (const key of Object.keys(attrs).sort()) {
      html += ` ${key}="${attrs[key]}"`;
    }
  } else {
    // Assume attrs holds the first child.
    const child = /** @type {Child} */ (/** @type {unknown} */ (attrs));
    children.unshift(child);
  }

  // Close the opening tag.
  html += '>';

  // Add child elements.
  for (const child of children) {
    html += child;
  }

  // Add the closing tag.
  html += `</${name}>`;

  return html;
}

/**
 * Generates an HTML string for a self-closing element.
 * @param {string} name
 * @param {Attributes} [attrs]
 * @returns string - the HTML
 */
export function elc(name, attrs) {
  // Begin the tag.
  /** @type {string} */
  let html = '<' + name;

  if (typeof attrs === 'object' && !Array.isArray(attrs)) {
    // Add attributes to the opening tag.
    for (const key of Object.keys(attrs).sort()) {
      html += ` ${key}="${attrs[key]}"`;
    }
  }

  // Close the tag.
  html += '>';

  return html;
}

const contentElements = [
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
];
const selfClosingElements = [
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
];

/** @type {{[name: string]: (ContentFn | SelfClosingFn)}} */
const elements = {};

for (const name of contentElements) {
  elements[name] = /** @type {ContentFn} */ (
    (attrs, ...children) => el(name, attrs, ...children)
  );
}

for (const name of selfClosingElements) {
  elements[name] = /** @type {SelfClosingFn} */ (attrs => elc(name, attrs));
}

/**
 * Validates a string of HTML and returns a report.
 * @param {string} html
 * @returns {Promise<Report>} true if valid; false otherwise
 */
export async function validate(html) {
  const htmlValidate = new HtmlValidate();
  return htmlValidate.validateString(html);
}

export default elements;

export const a = elements.a;
export const article = elements.article;
export const aside = elements.aside;
export const audio = elements.audio;
export const b = elements.b;
export const body = elements.body;
export const blockquote = elements.blockquote;
export const button = elements.button;
export const canvas = elements.canvas;
export const caption = elements.caption;
export const cite = elements.cite;
export const code = elements.code;
export const colgroup = elements.colgroup;
export const dd = elements.dd;
export const details = elements.details;
export const dialog = elements.dialog;
export const div = elements.div;
export const dl = elements.dl;
export const dt = elements.dt;
export const em = elements.em;
export const fieldset = elements.fieldset;
export const figcaption = elements.figcaption;
export const figure = elements.figure;
export const form = elements.form;
export const h1 = elements.h1;
export const h2 = elements.h2;
export const h3 = elements.h3;
export const h4 = elements.h4;
export const h5 = elements.h5;
export const h6 = elements.h6;
export const head = elements.head;
export const header = elements.header;
export const html = elements.html;
export const i = elements.i;
export const iframe = elements.iframe;
export const label = elements.label;
export const li = elements.li;
export const main = elements.main;
export const map = elements.map;
export const mark = elements.mark;
export const menu = elements.menu;
export const nav = elements.nav;
export const object = elements.object;
export const ol = elements.ol;
export const optgroup = elements.optgroup;
export const option = elements.option;
export const output = elements.output;
export const p = elements.p;
export const picture = elements.picture;
export const pre = elements.pre;
export const progress = elements.progress;
export const q = elements.q;
export const script = elements.script;
export const section = elements.section;
export const select = elements.select;
export const slot = elements.slot;
export const small = elements.small;
export const span = elements.span;
export const strong = elements.strong;
export const style = elements.style;
export const sub = elements.sub;
export const summary = elements.summary;
export const sup = elements.sup;
export const table = elements.table;
export const tbody = elements.tbody;
export const td = elements.td;
export const template = elements.template;
export const textarea = elements.textarea;
export const tfoot = elements.tfoot;
export const th = elements.th;
export const thead = elements.thead;
export const time = elements.time;
export const title = elements.title;
export const tr = elements.tr;
export const u = elements.u;
export const ul = elements.ul;
// export const var = elements.var; // matches a JS keyword
export const video = elements.video;

export const area = elements.area;
export const base = elements.base;
export const br = elements.br;
export const col = elements.col;
export const embed = elements.embed;
export const hr = elements.hr;
export const img = elements.img;
export const input = elements.input;
export const link = elements.link;
export const meta = elements.meta;
export const source = elements.source;
export const track = elements.track;
export const wbr = elements.wbr;
