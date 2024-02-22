import './style.css';
import elements from 'js2htmlstr';
const {h1, p, section} = elements;

document.body.innerHTML = section(
  h1('My Demo'),
  p('This is a demo of js2htmlstr.')
);
