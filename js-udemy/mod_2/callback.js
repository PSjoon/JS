const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1} . ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function (a) {
    console.log(a)
})

/**
 * * forEach = atribui o valor da função, pela qual a função
 * * esta atribuida a um array, imprimindo assim os dados do
 * * array
 * ** para cada elemento encontrato, neste caso no array,
 * ** vai chamar a função, ForEach/callback, executando o
 * ** o dado da função
 *
 *
 */
