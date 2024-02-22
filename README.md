# js2html

This is a collection of JavaScript functions
that generate and validate HTML strings.
For example usage, see `src/js2html.test.js`

To run the unit tests, enter `npm install` and `npm run test`.

The `example` directory contains an example project that uses this package.

The following code demonstrates basic usage.

```js
import elements from 'js2htmlstr';
const {h1, img, p, section} = elements;

// This creates the following HTML with no newlines or other whitespace.
// <section>
//   <h1>My Demo</h1>
//   <p>This is a demo of js2htmlstr.</p>
//   <img alt="giraffe" src="giraffe.jpg">
// </section>
document.body.innerHTML = section(
  h1('My Demo'),
  p('This is a demo of js2htmlstr.'),
  img({alt: 'giraffe', src: 'giraffe.jpg'})
);
```

For custom elements that can have content, use the `el` function.
For custom elements that cannot have content, use the `elc` function.
For example:

```js
import {el, elc} from 'js2htmlstr';
const html1 = el('custom-element-with-content', {id: 'example1'}, 'My Content');
const html2 = elc('custom-element-without-content', {id: 'example2'});
```

To validate a string of HTML, use the `validate` function.
This returns a `Report` object whose properties are described in `types.d.ts`.
One of the properties is `valid` that holds a Boolean value.
For example:

```js
import {validate} from './js2htmlstr.js';

const html = '<div>bad</span>';
const report = await validate(html);
// report.valid will be false.
```
