## Sitio para mostrar ejemplos de programación creativa P5js  



[https://ejemplos-p5js.herokuapp.com/](https://ejemplos-p5js.herokuapp.com/)

![](/src/public/imgA.png)

![](/src/public/imgB.png)


**Para agregar un ejemplo (un sketch.js de P5js):**  

1. Clonar el proyecto.  

2. Crear el directorio **consecutivo**, por ejemplo "sk5", en "src/public/sketches" y dentro crear el archivo sketch.js (5 es el número consecutivo del nuevo sketch, tamaño del canvas 520x320): 
```
"src/public/sketches/sk5/sketch.js"
```  

3. Agregar una entrada al archivo datos.json, con el identificador del sketch (*debe coincidir con el nombre del directorio consecutivo*), el título y la descripción, ejemplo de entrada:
```
{
    "id": "sk5",
    "title": "Título del sketch 5",
    "desc": "Descripción del sketch 5"
}
```

**Para clonar y ejecutar:**  

```
git clone https://github.com/matahj/ejemplosP5js.git
cd ejemplosP5js
npm install
npm run dev
```
o

```
npm start
```


**Pendiente:**  
* Automatizar el proceso para cargar un nuevo sketch, agregando una página para subir el archivo sketch.js y que de manera automática se guarde en el directorio correcto y se cree una entrada en datos.js.


**Algunos sketches están basados y/o tomados de:**  
* La página oficial de P5js (ejemplos).
* The Nature of Code by Daniel Shiffman (trasladados de processing a P5js). 



**Se utilizó:** 
* P5js
* NodeJS
* ExpressJS
* EJS
* Bootstrap 5
* Heroku

