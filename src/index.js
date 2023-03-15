import './styles/meyerReset.scss';
import './styles/styles.scss';
import threejsTestInit from './threejs/threejs-test.js';
import StarField from './threejs/starfield.js';
import firstSceneInit from './threejs/first-scene.js';
import { World } from './threejs/World/World.js';

import { init } from './starfield-simple/starfield-simple.js';

// Canvas Only

init();
/*
// Three.js

//threejsTestInit();

//window.starfield = StarField.create();
window.StarField = StarField;
StarField.displayPerlinImage(100);

//firstSceneInit();

(() => {
    let container = document.getElementById('scene-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'scene-container';
        document.body.append(container);
    }

    const world = new World(container);
    world.render();
})();
*/
