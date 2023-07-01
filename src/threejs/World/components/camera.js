import { PerspectiveCamera } from "three";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // field-of-view (fov)
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100, // far clipping plane
    );

    // Move camera back so we can view the scene
    camera.position.set(0, 0, 15);

    return camera;
}

export { createCamera };
