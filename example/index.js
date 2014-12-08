var glslify   = require('glslify');
var toy       = require('..');

var shader = glslify({
  vert: 'waves.vert',
  frag: 'waves.frag',
  transform: ['glslify-hex']
});

var start = Date.now();

toy(shader, function(gl, sh) {
  sh.uniforms.uScreenSize = [gl.drawingBufferWidth, gl.drawingBufferHeight];
  sh.uniforms.uTime = (Date.now() - start) / 1000;
});
