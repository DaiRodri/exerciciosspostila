var saldo = 1000
var valor = prompt("digite um valor")
if (valor <= saldo){
    saldo = saldo - valor
    document.write ("voce esta sacanado",valor)
} else{ 
    document.write("o valo solicitado é maior que o saldo ")

}
document.write(" o saldo é ", saldo)