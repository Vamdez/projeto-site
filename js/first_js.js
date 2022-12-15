const array = [1,2,3,4,5,6,6,7];
const cortado = array.slice(4);

function trocacor(letra){
    document.querySelector(".conta").value += letra;
    console.log(letra);
}

function resultadoConta(){
    var conta = document.querySelector(".conta").value;
    conta = conta.replace("x", "*");
    console.log(conta)
    document.querySelector(".conta").value = eval(conta);
}
