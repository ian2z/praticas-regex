// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes Variável - Expansivel
// Suporta amis de 1 Milhão de caracteres
// Atualmente tem mais de 100.000 de caracteres atribuídos

// https://unicode-table.com/pt/

const texto = "aѼcteste"

console.log(texto.match(/\U+047C/g))