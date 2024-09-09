var media = nota1,nota2,nota3,nota4
var nota1= Number(prompt (" entre com a primeira nota"))
var nota2= Number(prompt("entre com a segunda nota"))
var nota3= Number(prompt("entre com a terceira nota"))
var nota4= Number(prompt("entre com a quarta nota"))
media = (nota1+nota2+nota3+nota4)/4;

if( media >= 6){

    document.write(" voce esta aprovado com media: ", media)
}else{

    document.write("aluno reprovado com media: ",media)
}