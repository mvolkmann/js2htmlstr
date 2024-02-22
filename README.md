# js2html

This is a collection of JavaScript functions that generate HTML strings.
For example usage, see `src/js2html.test.js`

To run the unit tests, enter `npm install` and `npm run test`.

The `example` directory contains an example project that uses this package.

The following code demonstrates basic usage.

```js
import elements from 'js2htmlstr';
const {h1, p, section} = elements;

document.body.innerHTML = section(
  h1('My Demo'),
  p('This is a demo of js2htmlstr.')
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
