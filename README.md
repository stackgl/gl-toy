# gl-toy
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Create quick WebGL demo's using [`glslify`](http://github.com/stackgl/glslify).

## Installation
```bash
$ npm install gl-toy
```

## Usage
```js
var glslify   = require('glslify');
var toy       = require('gl-toy');

var shader = glslify({
  vert: 'shader.vert',
  frag: 'shader.frag'
});

var start = Date.now()

toy(shader, function(gl, shader) {
  shader.uScreenSize = [gl.drawingBufferWidth, gl.drawingBufferHeight];
  shader.uTime = Date.now() - start;
});
```
With [beefy](http://ghub.io/beefy) installed:
```js
$ beefy ./index.js
```

## Why?
WebGL and GLSLify can be a bit tricky to set up. This makes it easier to get
something working quickly. It might not suit all use cases, but then again:
neither does [shadertoy](https://www.shadertoy.com/).

## Contributors
- [Yoshua Wuyts](https://github.com/yoshuawuyts)
- [Hugh Kennedy](https://github.com/hughsk)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/gl-toy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gl-toy
[downloads-image]: http://img.shields.io/npm/dm/gl-toy.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/gl-toy
