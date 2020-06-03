JSResult
// comentario
// document.write("hello")

//// variáveis
//var myvar //registra uma variavel

//myvar = "hello" //variavel recebe valor

////ou
//var myvar = "hello"

//document.write(myvar) 
//document.write(myvar) 

//// tipos de dados
//var myvar = "hello"
//const myconst = "ha"

//document.write(myconst + myvar)

//// string
//const s1 = "Isso é uma string"
//const s2 = "Isso também é uma string"

//document.write(s1)

//// number
//const n1 = 1
//const n2= 12

//document.write(n1 + n2) // SOMA MATEMATICA 13

//// MAS SE
//const n1 = "1"
//document.write(n1 + n2) // CONCATENA 112

//// boolean
//const btrue = true
//const bfalse = false

//document.write(btrue) // LEITURA DO DADO BOOLEAN
//******************
//// objeto (tem propriedades e funcionalidades)
//const pessoa = { //estrutura de dado pessoa
//  altura: "1,80m",
// idade: 24,
//  solteiro: true
 // correr() { // funcionalidade
 // document.write("executar")
//  }
//}
//pessoa.correr()

//document.write(pessoa)// Só le object

//document.write(pessoa.idade) // lê idade da pessoa
//document.write(pessoa.solteiro) // lê true
//******************
//// array - vetores
//const colecaodebolinhas = ["blue", "green", 1, {name:"Myname"}] // blue é posicao 0 do array, green é posicao 1 do objeto, 1 é posicao 3 do objeto

//document.write(colecaodebolinhas[3].name) // retorna my name

//// Funções - funcionalidades - atalhos - reuso de código

//registrar função
//function saymyname() {
//  document.write("mayk") // document, objeto e write é a funcionalidade
//}

// executa a função
//saymyname() 


//registrar função
//function saymyname(name) {
//  document.write(name) // document, objeto e write é a funcionalidade
//}

// executa a função mandando um valor pro name
//saymyname("Douglas")
//saymyname("Valeska")


//// condicionais

//const notafinal = 7

//if( notafinal < 5) {
  //caminho 1
//  document.write("Reprovado")
//} else {
  //caminho 2
//  document.write("Aprovado")
//}

//// loop - repetições
// variável i atribui o valor 0, se i menor que 10, funcionalidade de escrever o alo até a soma de i++ chegar ao valor 10
//for( i=0; i<10; i++) {
  //document.write("<p> alo </p>") // <p> criou parágrafos, colocando elementos um abaixo do outro
//  document.write(`<p> ${i}</p>`) // colocou numeros de 0 a 9 por ter colocado a variavel {i}
//}

//document.querySelector("select[name=uf]") /*SELECIONAR O ELEMENTO SELECT COM NOME UF*/
//.addEventListener("change", () => {/*OUVINDO UM EVENTO, ()=> {} CRIA UMA FUNCAO ANONIMA*/
 //   console.log("mudei")
//} )
Resources