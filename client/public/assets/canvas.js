var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined,
};

let maxRadius = 60;
let minRadius = 3;

const colorArray = [
  "#FFFFFF", // white
  "#E6D5D5", // muted pale red
  "#DDE6D5", // muted pale green
  "#D5E0E6", // muted pale blue
  "#F2EAD5"  // very pale warm (cream/yellowish)
];


window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = this.color;
    c.shadowBlur = 30;
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > minRadius) {
        this.radius -= 1;
    }

    this.draw();
  };
}


let circleArray = [];

for (let index = 0; index < 500; index++) {
  circleArray.push(
    new Circle(
      Math.random() * (window.innerWidth - 60) + 30,
      Math.random() * (window.innerHeight - 60) + 30,
      Math.random() * .05,
      Math.random() * .05,
      Math.random() * 10 + 1
    )
  );
}


function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let index = 0; index < circleArray.length; index++) {
    circleArray[index].update();
  }

}

animate();
