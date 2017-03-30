//calcular area de un triangulo
let base = 5
let altura = 7

const triangleArea = (base, altura) =>  base * altura / 2;

console.log(`El área de un triángulo de base ${base} y altura ${altura} es: ${triangleArea(base, altura)}`);

//calcular area de un cuadrado
let lado = 5;

const cuadradoArea = (lado) => lado * lado;

console.log(`El area de un cuadrado de ${lado}cm es de: ${cuadradoArea(lado)}`);

//calcular area de un rectangulo
let ladoA = 5
let ladoB = 6

const rectangleArea = (ladoA, ladoB) => ladoA * ladoB;

console.log(`El area de un rectangulo de lado A mide ${ladoA} y lado B mide ${ladoB} es: ${rectangleArea(ladoA, ladoB)}`);