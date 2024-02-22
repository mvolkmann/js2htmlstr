/**
 * This defines functions that make it easy to
 * generate strings of HTML from JavaScript.
 */

/** @typedef {import('./js2htmlstr.d.ts').Attributes} Attributes } */
/** @typedef {import('./js2htmlstr.d.ts').Child} Child } */
/** @typedef {import('./js2htmlstr.d.ts').ContentFn} ContentFn } */
/** @typedef {import('./js2htmlstr.d.ts').SelfClosingFn} SelfClosingFn } */
/** @typedef {import('./js2htmlstr.d.ts').TagMap} TagMap } */

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

/** @type {TagMap} */
const tagMap = {};

for (const name of contentElements) {
  tagMap[name] = /** @type {ContentFn} */ (
    (attrs, ...children) => el(name, attrs, ...children)
  );
}

for (const name of selfClosingElements) {
  tagMap[name] = /** @type {SelfClosingFn} */ (attrs => elc(name, attrs));
}

export default tagMap;
