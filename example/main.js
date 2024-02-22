import './style.css';
import {h1, p, section} from 'js2htmlstr';

document.body.innerHTML = section(
  h1('My Demo'),
  p('This is a demo of js2htmlstr.')
);
