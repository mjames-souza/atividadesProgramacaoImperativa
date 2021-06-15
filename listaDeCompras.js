let listaDeCompras = ['feijão', 'arroz', 'maionese', 'refrigerante', 'açúcar'];



console.log('O método Join junta os elementos de um array usando um separador que especificamos');
console.log(listaDeCompras.join("-"));

listaDeCompras.pop();

console.log('O método Pop elimina o último elemento de um array');
console.log(listaDeCompras);

listaDeCompras.push('sal');

console.log('O método Push adiciona um ou mais elemento ao final do array');
console.log(listaDeCompras);

listaDeCompras.shift()

console.log('O método Shift elimina o primeiro elemento de um array');
console.log(listaDeCompras);

listaDeCompras.unshift('macarrão');

console.log('O método Unshift adiciona um ou mais elemento ao início de um array');
console.log(listaDeCompras);