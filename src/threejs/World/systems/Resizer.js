function setSize(container, camera, renderer) {
    // Set the camera's aspect ratio to match the container's proportions
    camera.aspect = container.clientWidth / container.clientHeight;

    // Update the camera's frustum
    camera.updateProjectionMatrix();

    // Set the renderer to the same size as our container element
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Set the pixel ratio to ensure the scene will look good on mobile devices
    renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
    constructor(container, camera, renderer) {
        // Set initial size on load
        setSize(container, camera, renderer);

        // Add resize event listener that updates size
        window.addEventListener('resize', () => {
            // Update size
            setSize(container, camera, renderer);

            // Perform any custom actions on resize
            this.onResize();
        });
    }

    onResize() {}
}

export { Resizer };
