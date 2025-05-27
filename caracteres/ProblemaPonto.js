const texto = "Bom\ndia"
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi)) // o ponto nao engloba o \n

// dotall - algumas linguagens tem um flag, mas o js não.