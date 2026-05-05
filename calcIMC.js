const peso = 70; //em kg
const altura = 1.75 // em metros

let IMC = peso / (altura ** 2)

console.log(`Seu IMC é: ${IMC.toFixed(2)}`)

if (IMC < 18.5){
    console.log("Classificação: Abaixo do peso")
}
if (IMC >= 18.5 && IMC <= 24.9){
    console.log("Classificação: Normal")
}
if (IMC >= 25 && IMC <= 29.9){
    console.log("Classificação: Sobrepeso")
}
if (IMC >= 30){
    console.log("Classificação: Obesidade")
}