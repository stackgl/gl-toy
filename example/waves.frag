precision mediump float;

varying vec2 vPos;
uniform vec2 uScreenSize;
uniform float uTime;

const float SHARPNESS = 300.0;
const vec3 COLOR_WAVE_LIGHT = #36BCDEF;
const vec3 COLOR_WHITE = vec3(1.0);

void main() {
  vec2 position = 2.0 * (gl_FragCoord.xy / uScreenSize.xy) - 1.0;
  position.x *= uScreenSize.x / uScreenSize.y;

  float waveHeight = (
    sin(position.x * 4.0 + uTime * 0.8) * 0.05 +
    sin(position.x * 1.3 + uTime * 0.15) * sin(uTime) * 0.03 +
    sin(position.x * 0.4 + uTime * 0.3) * 0.08
  );

  float belowWave = 1.0 - (position.y - waveHeight) * SHARPNESS;
  belowWave = clamp(belowWave, 0.0, 1.0);

  vec3 color = mix(COLOR_WAVE_LIGHT, COLOR_WHITE, 1.0 - belowWave);
  gl_FragColor = vec4(color, 1);
}
