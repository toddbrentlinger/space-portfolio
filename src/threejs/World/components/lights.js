import { DirectionalLight } from "three";

function createLights() {
    const light = new DirectionalLight('white', 5);

    // Move light right, up, and towards camera
    light.position.set(2, 0, 5);

    return light;
}

export { createLights };
