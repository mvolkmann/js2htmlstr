import {expect, test} from 'bun:test';
import elements from './js2htmlstr.js';
import {el, validate} from './js2htmlstr.js';
const {div, h1, img, input, p, section} = elements;

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

test('validate', async () => {
  let html = div(p('Hello'), p('World'));
  let report = await validate(html);
  expect(report.valid).toBe(true);

  html = '<div>bad</span>';
  report = await validate(html);
  expect(report.valid).toBe(false);

  // html = '<input type="wrong">';
  html = input({type: 'wrong'});
  report = await validate(html);
  expect(report.valid).toBe(false);

  // console.error('report =', report);
  const messages = [];
  for (const result of report.results) {
    for (const message of result.messages) {
      messages.push(message.message);
    }
  }
  // console.error('messages =', messages);
  expect(messages).toHaveLength(1);
  expect(messages[0]).toBe('Attribute "type" has invalid value "wrong"');
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
  const report = await validate(html);
  expect(report.valid).toBe(true);
});
