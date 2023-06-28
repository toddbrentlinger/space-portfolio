import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createSphere } from './components/sphere.js';
import { createScene } from './components/scene.js';

import { Loop } from './systems/Loop.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// Module scoped variables (NOT available outside of this module)
let camera, scene, renderer, loop;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);

        container.append(renderer.domElement);

        const cube = createCube();
        const sphere = createSphere();
        loop.updatables.push(cube, sphere);

        const light = createLights();

        scene.add(cube, light);
        scene.add(sphere);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        // Draw a single frame
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export { World }
