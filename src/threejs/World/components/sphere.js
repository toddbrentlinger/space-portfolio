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

function createSphere() {
    // Create geometry
    const geometry = new SphereGeometry();

    // Create mesh containing geometry and material
    const sphere = new Mesh(geometry, createMaterial());

    sphere.position.set(-2, 0, 0);

    const radiansPerSecond = MathUtils.degToRad(30);

    sphere.tick = (delta) => {
        // Increase sphere's rotation every frame
        sphere.rotation.y += radiansPerSecond * delta;
    };

    return sphere;
}

export { createSphere };