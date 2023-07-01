import {
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    SphereGeometry,
    TextureLoader,
    Vector2,
} from 'three';
import EarthDayMap from '../../../../assets/textures/earth-01/2k_earth_daymap.jpg';
import EarthNormalMap from '../../../../assets/textures/earth-01/2k_earth_normal_map.jpg';

function createMaterial() {
    const textureLoader = new TextureLoader();

    // Create physically correct material
    const material = new MeshStandardMaterial({
        map: textureLoader.load(EarthDayMap),
        normalMap: textureLoader.load(EarthNormalMap),
        normalScale: new Vector2(50, 50),
    });

    return material;
}

function createSphere(radius = 1, degreesPerSecond = 30) {
    // Create geometry
    const geometry = new SphereGeometry(radius, 64, 32);

    // Create mesh containing geometry and material
    const sphere = new Mesh(geometry, createMaterial());

    sphere.position.set(-4.5, 0, 0);

    const radiansPerSecond = MathUtils.degToRad(degreesPerSecond);

    sphere.tick = (delta) => {
        // Increase sphere's rotation every frame
        sphere.rotation.y += radiansPerSecond * delta;
    };

    return sphere;
}

export { createSphere };