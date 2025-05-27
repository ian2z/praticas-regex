const texto = "ABC [abc] a-c 1234"

console.log(texto.match(/[+.?*$]./g)) // não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g))

// NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))