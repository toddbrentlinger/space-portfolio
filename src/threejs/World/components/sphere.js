import {
    SphereGeometry,
    Mesh,
    MeshStandardMaterial,
    TextureLoader
} from 'three';
import EarthDayMap from '../../../textures/2k_earth_daymap.jpg';

function createSphere() {
    // Create geometry
    const geometry = new SphereGeometry();

    // Create default (white) basic material
    const materialBasic = new MeshStandardMaterial();

    const texture = new TextureLoader().load(EarthDayMap);
    const material = new MeshStandardMaterial({ map: texture, });

    // Create mesh containing geometry and material
    const sphere = new Mesh(geometry, materialBasic);

    sphere.position.set(-2, 0, 0);

    sphere.tick = () => {
        
    };

    return sphere;
}

export { createSphere };