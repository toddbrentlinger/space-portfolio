import { Group, MathUtils } from "three";

import { createMeshes } from "./meshes";

const wheelSpeed = MathUtils.degToRad(24);

class Train extends Group {
    constructor() {
        super();

        this.meshes = createMeshes();

        this.add(
            ...Object.values(this.meshes)
        );
    }

    tick(delta) {
        this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
        this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
        this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
        this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
    }
}

export default Train;
