# js2htmlstr Example Project

One way to use js2htmlstr in a web application is to use Vite.
This directory provides such an example project.

The following steps were used to create and run this project.

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

The following code in `main.js` demonstrates using js2htmlstr.

```js
import './style.css';
import elements from 'js2htmlstr';
const {h1, p, section} = elements;

document.body.innerHTML = section(
  h1('My Demo'),
  p('This is a demo of js2htmlstr.')
);
```
