import {
    BoxBufferGeometry,
    Mesh,
    MeshBasicMaterial
} from 'three';

function createCube() {
    // Create geometry
    const geometry = new BoxBufferGeometry(2, 2, 2);

    // Create default (white) basic material
    const material = new MeshBasicMaterial();

    // Create mesh containing geometry and material
    const cube = new Mesh(geometry, material);

    return cube;
}

export { createCube };
