// Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triangulo

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

console.groupEnd();

//Código del círculo

console.group("Circulos");

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI
}

console.groupEnd();

// Funciones cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    resultado.innerHTML = "el perimetro de tu cuadrado es " + perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    resultado.innerHTML = "el area de tu cuadrado es " + area;
}

// Funciones Circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    resultadoCirculo.innerHTML = "el diametro de tu circulo es " + diametro;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    resultadoCirculo.innerHTML = "el perimetro de tu circulo es " + perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    resultadoCirculo.innerHTML = "el area de tu circulo es " + area;
}

// Funciones triangulo

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const input1 = document.getElementById("InputTriangulo1");
    const inputBase = document.getElementById("InputTrianguloBase");
    const value = parseInt(input.value);
    const value1 = parseInt(input1.value);
    const valueBase = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(value, value1, valueBase);
    resultadoTriangulo.innerHTML = "El perimetro de tu triangulo es " + perimetro;
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueBase = parseInt(inputBase.value);
    const valueAltura = parseInt(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    resultadoTriangulo.innerHTML = "El area de tu triangulo es " + area;
}