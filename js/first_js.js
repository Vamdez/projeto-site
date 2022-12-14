const array = [1,2,3,4,5,6,6,7];
const cortado = array.slice(4);

function trocacor(letra){
    document.querySelector(".conta").value += letra;
    console.log(letra);
}

function resultadoConta(){
    const conta = document.querySelector(".conta").value;
    let resultadoFinal = fazendoConta(conta);
    document.querySelector(".conta").value = resultadoFinal;
}

function fazendoConta(texto){
    let total = 0;
    let number='';
    let number2='';
    let operator;
    for(let itens of texto){
        if(isNaN(itens) === false){
            number+=itens;
        }
        else if(operator === undefined){
            operator=itens;
            number2 = Number(number);
            number = '';
        }
        }
    number = Number(number);

    console.log(number)
    console.log(number2)
    console.log(operator)
    switch(operator){
        case "+":
            total = number + number2;
            break
        case "-":
            total = number2 - number;
            break
        case "x":
            total = number * number2;
            break
        case "/":
            total = number2 / number;
            break
        }
    return total
}