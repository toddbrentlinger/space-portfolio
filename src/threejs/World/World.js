import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createSphere } from './components/sphere.js';
import { createScene } from './components/scene.js';
import Train from './components/Train/Train.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Loop } from './systems/Loop.js';
import { Resizer } from './systems/Resizer.js';

// Module scoped variables (NOT available outside of this module)
let camera, scene, renderer, loop;

class World {
    constructor(container) {
        // Assign module scoped variables
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);

        // Add renderer canvas to DOM
        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);

        const cube = createCube();
        const sphere = createSphere();
        const train = new Train();

        // Center orbit controls on train
        controls.target.copy(train.position);

        // Disable panning in orbit controls
        //controls.enablePan = false;

        // Limit vertical rotation of orbit controls
        controls.minPolarAngle = Math.PI * 0.25; // default: 0
        controls.maxPolarAngle = Math.PI * 0.75; // default: Math.PI

        controls.minDistance = 2.5;

        const { directionalLight, ambientLight } = createLights();

        // Add objects to updatables array in loop to call object's tick method each animation loop 
        loop.updatables.push(cube, controls, sphere, train);

        // Add objects to scene
        scene.add(ambientLight, cube, directionalLight, sphere, train);

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
