const texto = "lista de arquivos mp3: jazz.mp3,roxk.mp3,podcast.mp3,blues.mp3"

console.log(texto.match(/\.mp3/g)) // usando caractare literal para representar o ponto (.), caso contrário, ele contará o primeiro "mp3" tambem.

//opção mais completa...
console.log(texto.match(/\w+\.mp3/g))