const texto1 = "O José Simão é muito engraçado... hehehehehehe"
console.log(texto1.match(/(he)/g))

const texto2 = "https://www.site.com.info www.escola.ninja.com google.com.br"
console.log(texto2.match(/(http:\/\/)?(www\.)?\w{2,}(\.\w{2})?/g))