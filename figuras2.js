//código de la figura

console.log("HOLAAA")

console.group("Figura");

function perimetroFigura(lados,medida){
    return lados * medida;
}
function AreaFigura(lados, medida) {
    const apotema = medida / (2 * Math.tan(Math.PI / lados));
    const perimetro = lados * medida;
    const area = (apotema * perimetro) / 2;
    return area;
  }

console.groupEnd();

// Funciones figura
function calcularAreaFigura(){
    const input = document.getElementById("InputLados");
    const value = input.value;

    const input2 = document.getElementById("InputMedidas");
    const value2 = input2.value;

    if(value < 3 || value2<0 || value.trim() === "" || value2.trim() === ""){
        resultado.innerHTML = "Ingrese número(s) válido(s)"
    } else {
        const area = AreaFigura(value,value2);
        resultado.innerHTML = "El área de tu figura es " + area; 
    }



}
function calcularPerimetroFigura(){
    const input = document.getElementById("InputLados");
    const value = input.value;

    const input2 = document.getElementById("InputMedidas");
    const value2 = input2.value;

    if(value < 3 || value2<0 || value.trim() === "" || value2.trim() === ""){
        resultado.innerHTML = "Ingrese número(s) válido(s)"
    } else {
        const perimetro = perimetroFigura(value, value2);
        resultado.innerHTML = "El périmetro de tu figura es " + perimetro;
    }
}