// import {
//     PerspectiveCamera,
//     Scene,
//     BoxGeometry,
//     MeshNormalMaterial,
//     Mesh,
//     WebGLRenderer,
// } from 'three';

import { Vector2, Vector3 } from 'three';
import { Perlin, FBM } from 'three-noise';

const starfield = {};

starfield.perlin = new Perlin(Math.random());

starfield.displayPerlin = function(xMax, yMax) {
    let str = '';
    for (let i = 0; i < xMax; i++) {
        for (let j = 0; j < yMax; j++) {
            str += this.perlin.get2(new Vector2(i, j));
            if (j < yMax - 1) {
                str += ' - ';
            }
        }
        str += '\n';
    }
    console.log(str);
};

starfield.get2 = function(x, y) {
    return this.perlin.get2(new Vector2(x, y));
};

starfield.displayRandomCoordsPerlinNoise = function () {
    setInterval(() => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const perlin = this.perlin.get2(new Vector2(randomX, randomY));

        console.log(`X: ${randomX} - Y: ${randomY}\n${perlin}`);
    }, 1000);
};

starfield.displayPerlinImage = function(divisions = 10, minLightness = -1) {
    // Get or create canvas (adding to DOM) to display perlin noise
    const canvasId = 'display-perlin-img';
    let canvas = document.querySelector(`canvas#${canvasId}`);
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = canvasId;
        document.body.appendChild(canvas);
    }

    // Set canvas size
    canvas.width = document.body.clientWidth;
    canvas.height = canvas.width;

    const ctx = canvas.getContext('2d');

    // Clear entire canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width / divisions;
    const height = canvas.height / divisions;
    let perlin;
    for (let x = 0; x < divisions; x++) {
        for (let y = 0; y < divisions; y++) {
            perlin = this.get2(x * width - 0.5 * width, y * height - 0.5 * height);
            if (perlin > minLightness) {
                ctx.fillStyle = `hsl(0, 0%, ${50 * perlin + 50}%)`;
                ctx.fillRect(x * width, y * height, width, height);
            }
        }
    }
};

export default starfield;
