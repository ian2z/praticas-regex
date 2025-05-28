const texto = `
    - fula@cod3r.com.br
    - teste@gamil.com.br
    - zico@hotmail.com.br
    - joao@empresa.info.br
    - maria_silca@resgitro.br
    - refa_el@hotmail.com.br
`

console.log(texto.match(/\S+@\w+(\.\w{2,6})?/g))