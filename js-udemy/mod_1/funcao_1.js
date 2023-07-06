//funcao sem retorno
function teste(a, b) {
    console.log(a + b)
}
teste(2, 3) //resultado padrão
teste(2) // com somente um insert, soma de valor inteiro com NaN
teste(2, 3, 4, 5, 6, 7) // Js pegará os valores iniciais e irá ignorar o restante


//funcao com retorno
function soma(a, b, c = 15) {
    return a + b + c

}
console.log(soma(3, 3))
console.log(soma(2))




/*
=============================================================================================================================================
1.
2.
3.
4.
5.
=============================================================================================================================================
*/


