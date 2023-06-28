const canvas = document.getElementById('star-trek-starfield');
const ctx = canvas.getContext("2d");

class Star {
  constructor(posX, posY, radius, speedMultiplier) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.speedMultiplier = speedMultiplier;
  }
  
  getRatiosBetweenCenterAndEdge() {
    /* minSize of canvas width and height use to make maximum size circle of 
     * star movement
     *
     * 0 is directly at center
     * 1 is directly at minSize furthest from top-left origin
     * -1 is directly at minSize closest to top-left origin
    */
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const minSize = Math.min(canvas.width, canvas.height);

    return {
      x: (centerX - this.posX) / minSize,
      y: (centerY - this.posY) / minSize,
    }
  }
  
  shiftPositionBySpeed(speed = 1) {
    const ratiosBetweenCenterAndEdge = this.getRatiosBetweenCenterAndEdge();
    this.posX -= speed * ratiosBetweenCenterAndEdge.x * this.speedMultiplier;
    this.posY -= speed * ratiosBetweenCenterAndEdge.y * this.speedMultiplier;
    
    // If current position is outside bounds, set to new random position
    if ((this.posX < 0 || this.posX > canvas.width) || (this.posY < 0 || this.posY > canvas.height)) {
      this.posX = Starfield.randNumBetweenTwoNumbersInclusive(0, canvas.width);
      this.posY = Starfield.randNumBetweenTwoNumbersInclusive(0, canvas.height);
      this.radius = Starfield.randNumBetweenTwoNumbersInclusive(1, 3);
    }
  }
}

class Starfield {
  constructor() {
    this.createRandomStars();
  }
  
  init() {
    setInterval(() => {
      this.render();
      this.stars.forEach((star) => {
        star.shiftPositionBySpeed(10);
      });
    }, 50);
  }
  
  clear() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  render() {
    this.clear();
    
    ctx.fillStyle = 'white';
    this.stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.posX, star.posY, star.radius / 2, 0, 2 * Math.PI);
      ctx.fill();
    });
  }
  
  createRandomStars(n = 100) {
    // Max Width: canvas.width
    // Max Height: canvas.height
    
    const radiusMin = 0.5; // px
    const radiusMax = 2; // px

    // Higher speed multiplier to represent closer stars that would move 
    // faster across the screen than further stars
    const speedMultiplierMin = 1;
    const speedMultiplierMax = 5;
    
    // Clear stars array
    this.stars = [];
    
    for (let i = 0; i < n; i++) {
      this.stars.push(
        new Star(
          Starfield.randNumBetweenTwoNumbersInclusive(0, canvas.width),
          Starfield.randNumBetweenTwoNumbersInclusive(0, canvas.height),
          Starfield.randNumBetweenTwoNumbersInclusive(radiusMin, radiusMax),
          Starfield.randNumBetweenTwoNumbersInclusive(speedMultiplierMin, speedMultiplierMax)
        )
      );
    }
  }
  
  static randNumBetweenTwoNumbersInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export function init() {
    // const minSize = Math.min(window.innerWidth, window.innerHeight);
    // canvas.width = minSize;
    // canvas.height = minSize;
    canvas.width = window.innerWidth; //document.body.clientWidth;
    canvas.height = window.innerHeight; //document.body.clientHeight;

    const starfield = new Starfield();
    starfield.init();
}

//init();
