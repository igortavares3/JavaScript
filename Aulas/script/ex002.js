/* var none = window.prompt ('Qual é seu nome?')
window.alert ('Foi um prazer te conhecer '+ none + '!' ) */

/* var n1 = Number(window.prompt ('Qual seu número favorito?'))
var n2 = Number(window.prompt ('Agora digite o número que você não gosta?'))
var s = n1 + n2 

window.alert (`A soma entre os valores ${n1} e ${n2} e igual a: ${s}`) 

var nome = window.prompt ('Qual é o seu nome?: ')
var idade = window.prompt ('Qual é a sua idade?:')
var nota = window.prompt ('Qual foi a sua nota?:')

window.alert (`O aluno ${nome} que tem a idade de ${idade} tirou a nota de ${nota}`) */

/*Localização de String: n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) */


/*var n1 = 1531
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) 

document.writeln (`Meu salario é de ${n1}`) */

var nome = window.prompt ('Qual é seu nome:? ')
window.alert (`Olá, ${nome}! Seu nome tem ${nome.length} letras`)

document.writeln (`Olá, ${nome}!. Seu nome tem ${nome.length} letras <br\>`)  
document.writeln (`Olá ${nome.toUpperCase()} esse é seu nome em maiúsculo <br\>`)
document.writeln (`Ola ${nome.toLowerCase()} esse é seu nome minúsculo`)