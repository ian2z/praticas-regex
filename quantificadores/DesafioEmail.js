const texto = `
Lista de e-mails:
    - fulano@code.com.br
    - teste534@gmail.com.br
    - john@hotmail.com.us
    - xaolin@xingxang.com.ch
    - richard_ras_muse@hotmail.com.br
`
console.log(texto.match(/\w+@\w+\.\w+\.\w+/g))