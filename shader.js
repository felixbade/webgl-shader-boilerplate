const fragmentShaderSource = `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

const int MAX_ITER = 100;

vec3 colorMap(float t) {
    vec3 c1 = vec3(0.0, 0.0, 0.5);
    vec3 c2 = vec3(0.0, 0.5, 1.0);
    vec3 c3 = vec3(1.0, 0.5, 0.0);
    vec3 c4 = vec3(1.0, 1.0, 1.0);

    if (t < 0.3333) {
        return mix(c1, c2, t / 0.3333);
    } else if (t < 0.6666) {
        return mix(c2, c3, (t - 0.3333) / 0.3333);
    } else {
        return mix(c3, c4, (t - 0.6666) / 0.3334);
    }
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y * 3.0 - vec2(0.5, 1.5);
    uv.x += sin(u_time * 0.1) * 0.5;
    uv.y += cos(u_time * 0.1) * 0.5;

    vec2 z = vec2(0.0);
    vec2 c = uv;

    int iter = 0;
    for (int i = 0; i < MAX_ITER; i++) {
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
        if (dot(z, z) > 4.0) break;
        iter++;
    }

    float t = float(iter) / float(MAX_ITER);
    vec3 color = colorMap(t);

    gl_FragColor = vec4(color, 1.0);
}
`;