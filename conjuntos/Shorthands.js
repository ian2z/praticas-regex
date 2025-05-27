const texto = "1,2,3,4,5,6,7,a.b,c,d c!d?e[f_g"

console.log(texto.match(/\d/g)) // números (0-9)
console.log(texto.match(/\D/g)) // Não números (0-9)

console.log(texto.match(/\w/g)) // caracteres [a-zA-z0-9_]
console.log(texto.match(/\W/g)) // Não caracteres [a-zA-z0-9_]

console.log(texto.match(/\s/g)) // espaços