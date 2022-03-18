let walker;

function setup() {
  createCanvas(594, 363);
  background(255);

  walker = new Walker();

  noLoop();
}

function draw() {
  
  walker.display();
  walker.step();

}

class Walker {
  
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  display() {
    stroke(color(255,0,0));
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
