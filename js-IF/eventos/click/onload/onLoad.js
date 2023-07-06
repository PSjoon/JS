function carreguei(){
    document.getElementById("log").innerHTML += "carreguei <br>";

}
function redimensionei(){
    document.getElementById("log").innerHTML += "redimensionei<br>";
}


/* 
=============================================================================================================================================
1. adiciona-se funções no html colocando uma palavra junta com parentesses, isso dentro de uma tag 
2. para criação de função no JS, usa-se a palavra function juntamente com o nome 
3. document.getElementById("") == 
    3.1 document == faz referencia a página html, não precisando fazer referencia pois o JS saberá pela função
    3.2 getElementyById("") == pela verificação do html, será pego(get) um elemento(Elementy) que possui(By) uma id(Id) dentro da página 
        html, fazendo uma verificação por id, buscando em especifico a palavra dentro dos parenteses que representa a palavra da id
4. innerHTML += "carreguei <br>"== 
    4.1 innerHTML == introduz o código HTML e com esse comendo introduz uma informação dentro dele, o JS modificará o html
    4.2 += == 
        4.2.1 + : pega a informação no HTML
        4.2.2 = : adiciona a informação em JS   
=============================================================================================================================================
*/