const A = 70;
const B = 3;
const op = '-';
let resultado
//opções '+', '-', '*', '/'

function calcular(a, b, op){
    switch(op){
        case "+":
            resultado = a + b
            console.log(`Resultado: ${resultado}`)
            break;

        case "-":
            resultado = a - b
            console.log(`Resultado: ${resultado}`)
            break;

        case "*":
            resultado = a * b
            console.log(`Resultado ${resultado}`)
            break;

        case "/":
            resultado = a / b
            console.log(`Resultado ${resultado}`)
            break;
        

    }
}

calcular(A, B, op)