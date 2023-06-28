import { Clock } from "three";

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            // Tell every animated object to tick forward each frame
            this.tick();

            // Render a frame
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        for (const object of this.updatables) {
            object.tick();
        }
    }
}

export { Loop };
