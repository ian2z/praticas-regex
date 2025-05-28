const texto = "Romário era um exelente jogador \n, mas hoje é um político questionador"

console.log(texto.match(/^r.*r$/gi)) // problema do dotall (quebra de linha)
console.log(texto.match(/^r[\s\S]*r$/gi)) // o js nao suporta o Dotall, esta é a forma mais simples de resolver o problema
