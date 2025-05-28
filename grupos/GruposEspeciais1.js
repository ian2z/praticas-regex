const texto = "joão é calmo, mas no transito fica nervoso"

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) //palavras com uma virgula na frente (sentido lookahead)
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi)) // mesmo exemplo, com ponto literal
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi)) //

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+(?!=,)/gi)) // para obter o resultado NEGATIVO, bsta acresentar !