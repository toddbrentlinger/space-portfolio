const canvas = document.getElementById('star-trek-starfield');
const ctx = canvas.getContext("2d");

class Star {
  constructor(posX, posY, radius) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
  }
  
  getRatiosBetweenCenterAndEdge() {
    /* 0 is directly at center
     * 1 is directly at edge furthest from top-left origin
     * -1 is directly at edge closest to top-left origin
    */
    const minSize = Math.min(canvas.width, canvas.height);
    return {
      x: (0.5 * canvas.width - this.posX) / (0.5 * canvas.width),
      y: (0.5 * canvas.height - this.posY) / (0.5 * canvas.height)
    };
  }
  
  shiftPositionBySpeed(speed = 1) {
    const ratiosBetweenCenterAndEdge = this.getRatiosBetweenCenterAndEdge();
    this.posX -= speed * ratiosBetweenCenterAndEdge.x;
    this.posY -= speed * ratiosBetweenCenterAndEdge.y;
    
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
    this.render();
    
    setInterval(() => {
      this.render();
      this.stars.forEach((star) => {
        star.shiftPositionBySpeed(1);
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
  
  createRandomStars(n = 10) {
    // Max Width: canvas.width
    // Max Height: canvas.height
    
    const radiusMin = 1; // px
    const radiusMax = 3; // px
    
    // Clear stars array
    this.stars = [];
    
    for (let i = 0; i < n; i++) {
      // Random X
      // Random Y
      // Random Radius
      this.stars.push(
        new Star(
          Starfield.randNumBetweenTwoNumbersInclusive(0, canvas.width),
          Starfield.randNumBetweenTwoNumbersInclusive(0, canvas.height),
          Starfield.randNumBetweenTwoNumbersInclusive(radiusMin, radiusMax)
        )
      );
    }
  }
  
  static randNumBetweenTwoNumbersInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export function init() {
    const minSize = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = minSize; //document.body.clientWidth;
    canvas.height = minSize; //document.body.clientHeight;

    const starfield = new Starfield();
    starfield.init();
}

init();
