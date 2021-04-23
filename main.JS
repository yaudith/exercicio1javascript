let nome = prompt("Digite seu nombre")
let sobrenome = prompt("Digite seu sobrenome")
let idade = Number(prompt("Digite sua idade"))
let nacionalidade = prompt("Digite sua nacionalidade")
let estadocivil = prompt('Qual é seu Estado Civil?')

let dados = {
    nome : nome, 
    sobrenome:sobrenome,
    idade:idade, 
    nacionalidade:nacionalidade,
    estadocivil:estadocivil,
}

console.log(`hello!!, Meu nome é ${nome} ${sobrenome}, eu tenho ${idade} anos de idade e sou de nacionalidad ${nacionalidade} meu estado civil ${estadocivil}`)

console.table(dados)