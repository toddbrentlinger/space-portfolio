import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial
} from 'three';

function createCube() {
    // Create geometry
    const geometry = new BoxBufferGeometry(2, 2, 2);

    // Create physically correct material
    const material = new MeshStandardMaterial({
        color: 'purple',
    });

    // Create mesh containing geometry and material
    const cube = new Mesh(geometry, material);

    cube.position.set(2, 0, 0);

    cube.rotation.set(-0.5, -0.1, 0.8);

    cube.tick = () => {
        // Increase cube's rotation every frame
        cube.rotation.z += 0.01;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    };

    return cube;
}

export { createCube };
