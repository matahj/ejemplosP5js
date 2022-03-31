let walker;

function setup() {
  createCanvas(520, 320);
  background(204, 204, 255);

  walker = new Walker();

  //noLoop();
}

function draw() {

  walker.display();
  walker.step();

}

class Walker {
  tam = 8; //tamaño del caminante
  colores = []; //color que pinta

  constructor() {
    //tamaño del arreglo de colores
    this.fils = Math.floor(height / this.tam);
    this.cols = Math.floor(width / this.tam);

    //inicialización del arreglo de colores
    for (let i = 0; i < this.fils; i++) {
      this.colores[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.colores[i][j] = 255;
      }
    }

    //posición inicial
    this.fil = Math.floor(height / 2);
    this.col = Math.floor(width / 2);

  }

  display() {
    stroke(color(255, 0, 0));

    fill(this.colores[Math.floor(this.fil / this.tam)][Math.floor(this.col / this.tam)]);
    this.colores[Math.floor(this.fil / this.tam)][Math.floor(this.col / this.tam)] -= 15;

    rect(this.col, this.fil, this.tam, this.tam);
  }

  step() {
    let dirs = [0, 1, 2, 3];
    let choice = random(dirs);

    if (choice == 0) {//derecha
      this.col = Math.abs(this.col + this.tam) % width;
    } else if (choice == 1) {//abajo
      this.fil = Math.abs(this.fil + this.tam) % height;
    } else if (choice == 2) {//arriba
      this.col = Math.abs(this.col - this.tam) % width;
    } else {//izquierda
      this.fil = Math.abs(this.fil - this.tam) % height;
    }
  }
}
