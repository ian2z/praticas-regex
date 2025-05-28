const texto = `
123456
cod3r
UASE123!
#0pA1
#essaSenhaEGrande1324567

#Opa1?
Foi123!
`

console.log(texto.match(/^.{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%¨&*]).{6,20}$/gm))