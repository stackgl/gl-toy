const triangle  = require('a-big-triangle')
const context   = require('gl-context')
const fit       = require('canvas-fit')
const Shader    = require('gl-shader')

module.exports = toy

const vert = `
precision mediump float;

attribute vec2 position;

void main() {
  gl_Position = vec4(position, 1, 1);
}
`.trim()

// String -> WebGLRenderingContext, Shader
function toy(frag, cb) {
  const canvas = document.body.appendChild(document.createElement('canvas'))
  const gl     = context(canvas, render)
  const shader = Shader(gl, vert, frag)
  const fitter = fit(canvas)

  render.update = update
  render.resize = fitter
  render.shader = shader
  render.canvas = canvas
  render.gl     = gl

  window.addEventListener('resize', fitter, false)
  return render

  function render() {
    const width  = gl.drawingBufferWidth
    const height = gl.drawingBufferHeight
    gl.viewport(0, 0, width, height)

    shader.bind()
    cb(gl, shader)
    triangle(gl)
  }

  function update(frag) {
    shader.update(vert, frag)
  }
}
