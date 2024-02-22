import {expect, test} from 'bun:test';
import elements from './js2htmlstr.js';
import {el} from './js2htmlstr.js';
const {div, img, p} = elements;

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
  expect(html).toBe('<img alt="giraffe" src="giraffe.jpg" />');
});

test('custom element', () => {
  const html = el('toggle-switch', {id: 'bluetooth'}, 'Bluetooth');
  expect(html).toBe('<toggle-switch id="bluetooth">Bluetooth</toggle-switch>');
});
