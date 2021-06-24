// Atividade para colocar em prática o conceito de Arrow Function
// Micro desafios - ARROW FUNCTIONS
// Transforme as seguintes funções em arrow functions:

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//function print(mensagem){
//     console.log(mensagem)
// }
//print(&quot;Olá, bom dia&quot;)

let print = mensagem => console.log (mensagem);

print("Olá, tudo bem?");


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//function soma(n1, n2){
//     return n1 + n2
// }
// console.log(soma(10, 10))

let soma = (n1,n2) =>  n1 + n2;

console.log(soma(10,10));