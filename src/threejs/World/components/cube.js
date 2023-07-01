import {
    BoxGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader,
    Vector2,
} from 'three';
import UVTestImage from '../../../../assets/textures/uv_test_bw.png';
import Albedo from '../../../../assets/textures/space-crate1-ue/space-crate1-albedo.png';
import Height from '../../../../assets/textures/space-crate1-ue/space-crate1-height.png';
import Normal from '../../../../assets/textures/space-crate1-ue/space-crate1-normal-dx.png';
import AORoughnessMetallic from '../../../../assets/textures/space-crate1-ue/space-crate1-ao-roughness-metallic.png';

function createMaterial() {
    const textureLoader = new TextureLoader();
    
    // Create physically correct material
    const aoRoughnessMetallicTexture = textureLoader.load(AORoughnessMetallic);
    const material = new MeshStandardMaterial({
        aoMap: aoRoughnessMetallicTexture,
        aoMapIntensity: 1,
        //displacementMap: textureLoader.load(Height),
        map: textureLoader.load(Albedo),
        metalness: 1,
        metalnessMap: aoRoughnessMetallicTexture,
        normalMap: textureLoader.load(Normal),
        normalScale: new Vector2(1, -1),
        roughness: 1,
        roughnessMap: aoRoughnessMetallicTexture,
    });

    return material;
}

function createCube() {
    // Create geometry
    const geometry = new BoxGeometry(2, 2, 2);

    // Create mesh containing geometry and material
    const cube = new Mesh(geometry, createMaterial());

    cube.position.set(4.5, 0, 0);

    cube.rotation.set(-0.5, -0.1, 0.8);

    const radiansPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) => {
        // Increase cube's rotation every frame
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
}

export { createCube };
