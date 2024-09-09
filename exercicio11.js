/*Elabore um programa que efetue o cálculo de um aumento salarial
respeitando o seguinte critério: se salário for menor ou igual a
R$500,00, aumento de 15%; se salário for maior que R$500,00 mas
menor ou igual a R$1.000,00, aumento de 12,5%; se salário for
maior que R$1.000,00, aumento de 10%.*/

var salario = Number(prompt (" entre com salario"))

var port1 = 0.15
var aumento1 = salario * port1
var novo = salario + aumento1

var port2 = 0.125
var aumento2 = salario * port2
var novo2 = salario + aumento2

var port3 = 0.10
var aumento3 = salario * port3
var novo3 = salario + aumento3

if(salario <= 500){
    salario * port1
    salario + aumento1
    
    document.write (" o salario com aumento é : " , + novo)
}
if (salario > 500 && salario <= 1000){
    salario * port2
    salario + aumento2
    document.write (" o salario com aumento é : " , + novo2)

}if (salario > 1000){
    salario * port3
    salario + aumento3
    document.write (" o salario com aumento é : " , + novo3)
}