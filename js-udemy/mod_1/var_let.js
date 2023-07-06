var num1 = 1
{
	var num1 = 2
	console.log("dentro= ", num1)
}
console.log("fora= ", num1)

let num2 = 1
{
	let num2 = 2
	console.log("dentro= ", num2)

}

console.log("fora= ", num2)


/*
=============================================================================================================================================
1. var == com isso cria-se uma variável global,
	substitiundo o valor pelo dentro do escopo
2. let == jas com o let, o escopo é de bloco,
	a exibição virá por bloco
3. var = escopo global, escopo funcao
4. let = escopo global, escopo funcao, escopo de bloco
5.
=============================================================================================================================================
*/
