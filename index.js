/**
 * Module dependencies.
 */

var canvas    = document.body.appendChild(document.createElement('canvas'));
var triangle  = require('a-big-triangle');
var context   = require('gl-context');
var fit       = require('canvas-fit');

/**
 * Make the canvas responsive
 */

window.addEventListener('resize', fit(canvas), false);

/**
 * Expose `toy`.
 */

module.exports = toy;

/**
 * Toy.
 *
 * @param {Shader} shader
 * @param {Function} cb
 * @api public
 */

function toy(shader, cb) {

  var gl = context(canvas, render);
  shader = shader(gl);

  function render() {
    var width = gl.drawingBufferWidth;
    var height = gl.drawingBufferHeight;
    gl.viewport(0, 0, width, height);

    shader.bind();
    cb(gl, shader);
    triangle(gl);
  }
};
