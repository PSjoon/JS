const pessoa =
{
    nome: "ana",
    idade: 5,
    endereco:
    {
        logradouro:" rua abc",
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)

// atribuindo os dados a outras variáveis
const {nome: n, idade: i} = pessoa
console.log(n,i)








/* 
=============================================================================================================================================
1. para extrair dados de um objeto, usa-se o destructing
2. 
3. 
4. 
5. 
=============================================================================================================================================
*/