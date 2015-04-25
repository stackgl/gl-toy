# gl-toy
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Create quick GLSL fragment shader demos.

## Installation
```bash
$ npm install gl-toy
```

## Usage
```js
var glslify = require('glslify')
var toy     = require('gl-toy')

var shader = glslify('./shader.frag')
var start  = Date.now()

toy(shader, function(gl, shader) {
  shader.uniforms.uScreenSize = [gl.drawingBufferWidth, gl.drawingBufferHeight]
  shader.uniforms.uTime = Date.now() - start
})
```
With [beefy](http://ghub.io/beefy) installed:
```js
$ beefy ./index.js
```

### toy = glToy(frag, update)
Creates a new shader renderer, attaching it to `document.body` and making
it fill the screen.

`frag` should be a fragment shader string you'd like to render using
[`a-big-triangle`](http://ghub.io/a-big-triangle).

`update(gl, shader)` is called before drawing to the screen so that you
can update uniforms being passed into the program. Here, `gl` is a
`WebGLRenderingContext` and `shader` is an instance of
[`gl-shader`](http://ghub.io/gl-shader).

### toy.update(frag)

Updates the current fragment shader with the new `frag`
string.

### toy.resize()

Resizes the canvas to fit within its parent element, using
[`canvas-fit`](http://ghub.io/canvas-fit).

### toy.canvas

A reference to `gl-toy`'s canvas element.

### toy.gl

A reference to `gl-toy`'s `WebGLRenderingContext`.

### toy.shader

A reference to `gl-toy`'s instance of
[`gl-shader`](http://ghub.io/gl-shader).

## Why?
WebGL and glslify can be a bit tricky to set up. This makes it easier to get
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
