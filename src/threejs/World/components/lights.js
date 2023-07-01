import { 
    AmbientLight,
    DirectionalLight, 
} from "three";

function createLights() {
    const ambientLight = new AmbientLight('white', 2);
    const directionalLight = new DirectionalLight('white', 5);

    // Move light right, up, and towards camera
    directionalLight.position.set(2, 0, 5);

    return { directionalLight, ambientLight };
}

export { createLights };
