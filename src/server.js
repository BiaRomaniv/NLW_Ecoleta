const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
// pagina inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) =>{
    //res.send("Aqui")
   // res.sendFile(__dirname + "/views/index.html")
   return res.render("index.html")
})
server.get("/create-point", (req, res) =>{
   //res.sendFile(__dirname + "/views/create-point.html")
   return res.render("create-point.html")
})
server.get("/search-results", (req, res) =>{
    //res.sendFile(__dirname + "/views/search-results.html")
    return res.render("search-results.html")
})

//ligar servidor
server.listen(3000)
