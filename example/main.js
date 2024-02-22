import './style.css';
import tagMap from 'js2htmlstr';
const {h1, p, section} = tagMap;

document.body.innerHTML = section(
  h1('My Demo'),
  p('This is a demo of js2htmlstr.')
);
