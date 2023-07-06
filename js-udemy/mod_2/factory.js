//*Factory simples
function Pessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
function Produto(nome, produto) {
    return {
        nome,
        produto,
        desconto: 0.1
    }
}
console.log(Produto("notebook", 123.00))





/**
 * *função pela qual retorna um objeto
 *
 */
