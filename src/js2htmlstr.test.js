import {expect, test} from 'bun:test';
import tagMap, {el} from './js2htmlstr.js';
const {div, h1, img, p, section} = tagMap;

test('element with text', () => {
  const html = p('Hello, World!');
  expect(html).toBe('<p>Hello, World!</p>');
});

test('element with attributes and text', () => {
  const html = p({id: 'p1', class: 'greet'}, 'Hello, World!');
  expect(html).toBe('<p class="greet" id="p1">Hello, World!</p>');
});

test('element with child elements', () => {
  const html = div(p('Hello'), p('World'));
  expect(html).toBe('<div><p>Hello</p><p>World</p></div>');
});

test('self closing element', () => {
  const html = img({alt: 'giraffe', src: 'giraffe.jpg'});
  expect(html).toBe('<img alt="giraffe" src="giraffe.jpg">');
});

test('custom element', () => {
  const html = el('toggle-switch', {id: 'bluetooth'}, 'Bluetooth');
  expect(html).toBe('<toggle-switch id="bluetooth">Bluetooth</toggle-switch>');
});

test('bigger', async () => {
  const html = section(
    h1('My Demo'),
    p('This is a demo of js2htmlstr.'),
    img({alt: 'giraffe', src: 'giraffe.jpg'})
  );
  const expected =
    '<section><h1>My Demo</h1><p>This is a demo of js2htmlstr.</p><img alt="giraffe" src="giraffe.jpg"></section>';
  expect(html).toBe(expected);
});
