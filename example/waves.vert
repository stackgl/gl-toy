precision mediump float;

attribute vec2 position;

varying vec2 vPos;

void main() {
  gl_Position = vec4(position, 1, 1);
  vPos = position;
}
