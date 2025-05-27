const texto = `
Lista telefonica:
    - (11) 98756-1212
    - (93) 98756-1212
    - 98756-1212
    - (82) 98756-1212
    - (55) 98756-1212
`

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))