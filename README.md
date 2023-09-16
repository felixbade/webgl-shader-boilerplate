# WebGL shader boilerplate

## Features
- GLSL shader that is full window
- Float time uniform

## Audio
- My personal favorite is [tone.js](https://tonejs.github.io)

## Likely future features
- Going full screen
- Play/pause/restart
- Adjustable fixed resolution for the shader (letterboxed)

## Possible future features
- Parameter adjusting
- Font rendering as a texture input for the shader
- Multi-pass shaders

## Out of scope
- Raymarcher engine. It’s fun to create from scratch! Also, shaders can be used for other effects as well.
- Tone mapping. Again, this is part of the shader.
- Stateful feedback shaders (e.g. [reaction diffusion](https://en.wikipedia.org/wiki/Reaction–diffusion_system)). Making a generic platform would increase the complexity too much.
- WebGPU. It’s too new for now, and by the time it’s mature, it’s probably a good idea to build the boilerplate from scratch.
- Interactivity meant for the audience. Only ”debug” style parameter adjusting might be added.
