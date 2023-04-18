
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

    if(value <= 0 || value.trim() === ""){
        resultado.innerHTML = "Ingrese número(s) válido(s)"
    } else {
        const perimetro = perimetroCuadrado(value);
        resultado.innerHTML = "El perímetro de tu cuadrado es " + perimetro;
    }
    
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    if(value <= 0 || value.trim() === ""){
        resultado.innerHTML = "Ingrese número(s) válido(s)"
    } else {
        const area = areaCuadrado(value);
        resultado.innerHTML = "El área de tu cuadrado es " + area;
    }
}

// Funciones Circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    resultadoCirculo.innerHTML = "El diámetro de tu circulo es " + diametro;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    if(value <= 0 || value.trim() === ""){
        resultadoCirculo.innerHTML = "Ingrese número(s) válido(s)"
    } else {
        const perimetro = perimetroCirculo(value);
        resultadoCirculo.innerHTML = "El perímetro de tu circulo es " + perimetro;
    }
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    if(value <= 0 || value.trim() === ""){
        resultadoCircula.innerHTML = "Ingrese número(s) válido(s)"
    } else {
        const area = areaCirculo(value);
        resultadoCirculo.innerHTML = "El área de tu circulo es " + area;
    }
}

// Funciones triangulo

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const input1 = document.getElementById("InputTriangulo1");
    const inputBase = document.getElementById("InputTrianguloBase");
    const value = input.value;
    const value1 = input1.value;
    const valueBase = inputBase.value;

    if(value <= 0 || value.trim() === "" || value1 <= 0 || value1.trim() === "" || valueBase <= 0 || valueBase.trim() === ""){
        resultadoTriangulo.innerHTML = "Ingrese número(s) válido(s)"
    } else {
        const perimetro = perimetroTriangulo(parseInt(value), parseInt(value1), parseInt(valueBase));
        resultadoTriangulo.innerHTML = "El perímetro de tu triángulo es " + perimetro;
    }
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    if(valueBase <= 0 || valueBase.trim() == "" || valueAltura <= 0 || valueAltura.trim() == "" ){
        resultadoTriangulo.innerHTML = "Ingrese número(s) válido(s)"
    } else {
        const area = areaTriangulo(parseInt(valueBase), parseInt(valueAltura));
        resultadoTriangulo.innerHTML = "El área de tu triángulo es " + area;
    }
}