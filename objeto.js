// Crie uma função construtora chamada Restaurante, que receba como parâmetros
// o nome do restaurante e o cardápio (que será um array de strings).

//Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem
// de boas-vindas, informando o nome do restaurante, e o cardápio.

// Micro Desafio - Meu Cardápio

function Restaurante(nome,cardapio){
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada =  function () { 
        return 'Seja bem vindo ao  '+this.nome+'.'+' O nosso cardápio de hoje é '+this.cardapio+'.'
    }
}   


let cadastroRestaurante =  new Restaurante("Restaurante Comida Boa", "miojo de tomate com Coquinha gelada");

console.log(cadastroRestaurante);
console.log(cadastroRestaurante.entrada());


//********************************************************//
// Micro desafio - ver números

//Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome.

let numeroPrimos = [2,3,5,7];

//crie outro array, desta vez chamado numeros, que deve conter os 
//valores do array numerosPrimos adicionados através do spread, juntos com outros números

let numeros = [... numeroPrimos, 8, 9, 10, 11];

console.log(numeros);

// Crie uma função maiorNumero() que receba N parâmetros, 
// e retorne o menor número entre eles, utilizando a função Math.min()

function maiorNumero(... n){
    console.log(Math.min(... n))
}

maiorNumero(1,2,3,4,5,6);
