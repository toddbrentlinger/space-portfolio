import { Color, Scene } from 'three';

function createScene() {
    const scene = new Scene();

    scene.background = new Color('skyBlue');

    return scene;
}

export { createScene };
