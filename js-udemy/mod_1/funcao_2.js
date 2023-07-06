//funcao anonima
const teste = function (a, b) {
    console.log(a + b)
}
teste(2, 3)

//funcao arrow em uma variável
const soma = (a, b) => {
    return a + b

}
console.log(soma(2, 3))

//retorno implicito
const subt = (a, b) => a - b

console.log(subt(10, 5))


// outro modo de se resumir
const imp = a => console.log(a)
imp("atribuicao de valor")



/*
=============================================================================================================================================
1. arrow == um modo de se criar uma funcao resumida
2.
3.
4.
5.
=============================================================================================================================================
*/
