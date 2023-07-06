const resul = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("nota alta")
            break

        case 8:
        case 7:
        case 6:
            console.log("nota média")
            break

        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            console.log("nota baixa")
            break

        case 0:
            console.log("zerado")
            break
        default:
            console.log("ERROR")

    }
}
resul(8)


/*
=============================================================================================================================================
1. substitudo para os ifs, cria uma condição com o switch sendo que  os parametros estão no case
2. usa-se o break pois sem ele o código sera imprimido todo os resultados
3.
4.
5.
=============================================================================================================================================
*/
