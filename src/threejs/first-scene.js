import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from 'three';

export default function init() {
    let container = document.getElementById('scene-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'scene-container';
        document.body.append(container);
    }

    // Scene

    const scene = new Scene();
    scene.background = new Color('skyblue');

    // Camera

    const fov = 35; // field of view
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1; // near clipping plane
    const far = 100; // far clipping plane

    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 10);

    // Geometry

    const geometry = new BoxBufferGeometry(2, 2, 2);

    // Material

    const material = new MeshBasicMaterial();

    // Mesh

    const cube = new Mesh(geometry, material);
    scene.add(cube);

    // Renderer

    const renderer = new WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.append(renderer.domElement);

    renderer.render(scene, camera);
}
