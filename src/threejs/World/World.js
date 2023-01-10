import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// Module scoped variables (NOT available outside of this module)
let camera, renderer, scene;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();

        container.append(renderer.domElement);
    }

    render() {
        // Draw a single frame
        renderer.render(scene, camera);
    }
}

export { World }
