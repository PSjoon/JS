function inicio_fim (min, max){
    const valor = Math.random() * (max - min) + min
    return  Math.floor(valor)
}
let opcao = 0

while (opcao != -1){
    opcao = inicio_fim(-1, 10)
    console.log(`opcao escolhida foi ${opcao}.`) 
}

console.log("end")

/*
let opcao 

do {
    opcao = inicio_fim(-1, 10)
    console.log(`opcao escolhida foi ${opcao}.`) 
}while (opcao != -1)

console.log("end")

/* 
=============================================================================================================================================
1. usada para dados indeterminados
2. na utilização do do while, pouco utilizado, não é necessario valor inicial
3. 
4. 
5. 
=============================================================================================================================================
*/