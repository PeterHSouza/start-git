const valores =  [7.7, 8.9, 6.3, 9.2]//indice 0, 1, 2 e 3 // par de colchetes cria um array
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores)
console.log(valores.length)// vai dizer quantos elementos tem no array


valores.push({id: 3}, false, null, 'teste')// para adicionar multiplos valores
console.log(valores)

console.log(valores.pop())// vai tirar o ultimo valor do array e vai "sacar"
delete valores[0]
console.log(valores)

console.log(typeof valores)