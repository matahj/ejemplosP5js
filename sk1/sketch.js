let walker;

function setup() {
  createCanvas(594, 364);

  noLoop();
}

function draw() {
  background(255);

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  //console.log(mouseX, mouseY);
}

class Walker {

  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  display() {
    stroke(color(255, 0, 0));
    point(this.x, this.y);
  }

  step() {
    let dirs = [0, 1, 2, 3];
    let choice = random(dirs);
    console.log(choice);

    if (choice == 0) {
      this.x++;
    } else if (choice == 1) {
      this.y++;
    } else if (choice == 2) {
      this.x--;
    } else {
      this.y--;
    }
  }
}
