# js2html

This is a collection of JavaScript functions that generate HTML strings.
For example usage, see `src/js2html.test.js`

To run the unit tests, enter `npm install` and `npm run test`.

One way to use this package in a web application is to use Vite.
The following steps achieve this.

1. `npm create vite@latest`
1. Enter a project name.
1. For "Select a framework", choose "Vanilla".
1. For "Select a variant", choose "TypeScript" or "JavaScript".
1. cd to the newly created project directory.
1. `npm install`
1. `npm install js2htmlstr`
1. Edit the contents of `main.ts` or `main.js` to match below.
1. `npm run dev`
1. Browse localhost:5173.

The following `main.js` content demonstrates using this package.

```js
import './style.css';
import elements from 'js2htmlstr';
const {h1, p, section} = elements;

document.querySelector('#app').innerHTML = section(
  h1('My Demo'),
  p('This is a demo of js2htmlstr.')
);
```
