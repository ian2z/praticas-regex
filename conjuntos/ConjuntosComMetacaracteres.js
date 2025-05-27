const texto = ".$+*?-"

console.loglog(texto.match(/[+.?*$]./g)) // não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g))