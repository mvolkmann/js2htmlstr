# js2htmlstr

This is a collection of JavaScript functions that generate HTML strings.

## Examples

The following code demonstrates basic usage.

```js
import tagMap from 'js2htmlstr';
const {h1, img, p, section} = tagMap;

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

For more usage examples , see `src/js2html.test.js`

The `example` directory contains a project that uses this package.

## Validation

If you wish to validate an HTML string in server-side code, not in a browser,
I recommend using the npm package
[html-validate](https://www.npmjs.com/package/html-validate).

After installing this package, do the following in code.

```js
import {HtmlValidate} from 'html-validate';

const htmlValidate = new HtmlValidate();
const report = await htmlValidate.validateString(html);
```

The `report` variable will hold a `Report` object.
One of the properties of this object is `valid`, which holds a Boolean value.
The remaining properties provide more detail in the case that `valid` is false.

## Tests

To run the unit tests, enter `npm install` and `npm run test`.
