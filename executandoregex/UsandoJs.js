const texto =  "0,1,2,3,4,5,6,7,8,9,10,a,b,c,d,e,f"

const regexNove = RegExp("9")

console.log("Métodos da RegExp...")
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
console.log("Métodos em string...")
console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras))
console.log(texto.replace(regexLetras, "aqui tinha uma letra"))
console.log(texto.split(regexLetras))