function fun1() {}   

const fun2 = function() {}

//armazenar funcao ema array
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log (array[0] (2,3))


//armazenar funcaoo em objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//passar funcao como paremetro
function run(fun){
    fun()//sendo a execucao esta acontecendo aqui pois aq ocorra a invocacao
}
run(function() {console.log('executando...')})

// funcar retornar/conter funcao 
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)

    }

}
soma(2, 5)(8)
const cinco = soma(2, 5)
cinco(4)



/* 
=============================================================================================================================================
1. para envocar funcao, necessita dos parenteses
2. 
3. 
4. 
5. 
=============================================================================================================================================
*/