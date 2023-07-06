const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: funcional OO

const bin = pessoa.falar.bind(pessoa)
bin()



function repet() {
    this.idade = 0 // coloca a idade o atributo adiante

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)

    }/*.bind(this)*/, 1000)
}

new repet

/*
=============================================================================================================================================
1. conceito this notion
2. com a repeticao, cria-se uma const para travar o this, com isso evita a modificacao do this
3. entre comentarios utiliza-se o bind para travar o elemento
4.
5.
=============================================================================================================================================
*/
