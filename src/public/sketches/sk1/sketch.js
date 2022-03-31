let numWalkers = 1;
const tam = 8;
let fils;
let cols;
const colores = [];
const walkers = [];

function setup() {
  createCanvas(520, 320);
  background(204, 204, 255);

  //tamaño del arreglo de colores
  fils = Math.floor(height / tam);
  cols = Math.floor(width / tam);

  //inicialización del arreglo de colores
  for (let i = 0; i < fils; i++) {
    colores[i] = [];
    for (let j = 0; j < cols; j++) {
      colores[i][j] = 255;
    }
  }

  for (let i = 0; i < numWalkers; i++) {
    walkers[i] = new Walker();
  }

  //noLoop();
}

function draw() {

  for (let i = 0; i < numWalkers; i++) {
    walkers[i].display();
    walkers[i].step();
  }

}

class Walker {

  constructor() {
    //posición inicial
    this.fil = Math.floor(height / 2);
    this.col = Math.floor(width / 2);
  }

  display() {
    stroke('red');

    fill(colores[Math.floor(this.fil / tam)][Math.floor(this.col / tam)]);
    colores[Math.floor(this.fil / tam)][Math.floor(this.col / tam)] -= 15;

    rect(this.col, this.fil, tam, tam);
  }

  step() {
    let dirs = [0, 1, 2, 3];
    let choice = random(dirs);

    if (choice == 0) {//derecha
      this.col = Math.abs(this.col + tam) % width;
    } else if (choice == 1) {//abajo
      this.fil = Math.abs(this.fil + tam) % height;
    } else if (choice == 2) {//arriba
      this.col = Math.abs(this.col - tam) % width;
    } else {//izquierda
      this.fil = Math.abs(this.fil - tam) % height;
    }
  }
}
