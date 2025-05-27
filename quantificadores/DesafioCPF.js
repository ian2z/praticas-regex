const texto = `
CPF dos aprovados:
    - 115.624.954-06
    - 051.620.565-45
    - 165.566.804-15
    - 856.667.164-95
    - 162.961.621-61
`

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))