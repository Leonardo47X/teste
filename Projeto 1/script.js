// distância em metros.
// duração em minutos.
//gasto energético >= 100kg - 10 | >= 80kg - 6| >= 60kg - 4 
//login

let inputPeso = document.getElementById("peso")
let inputDistância = document.getElementById("distância")
let inputDuração = document.getElementById("duração")

let resultado = document.getElementById("resultado")

function calcular() {

    let peso = inputPeso.value

    let distância = inputDistância.value

    let duração = inputDuração.value

    let velocidade = distância / duração

    let caloriaGasta = gastoEnergetico(peso) * (distância / 100)


    resultado.innerHTML =  `<p>${Math.ceil(velocidade / 16.7)}km/h </p>`
    resultado.innerHTML += `<p>${caloriaGasta}kcal </p>`

}

function gastoEnergetico(peso) {
    if (peso >= 100) {
        return 10
    } else if (peso >= 80) {
        return 6
    } else if (peso >= 40) {
        return 4
    } else {
        return "ERRO"
    }
    
}