// g - global
// i - igonare case

const texto = "Carlos assinou o abaixo-assinado"

console.log(texto.match(/C|ab/))
console.log(texto.match(/c|ab/i))
console.log(texto.match(/c|ab/gi))