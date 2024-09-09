/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja
comprar um carro hatch, e a revenda possui, além de carros hatch,
sedans, motocicletas e caminhonetes. Utilizando uma estrutura
switch/case, caso o comprador queira o hatch, retorne: “Compra
efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo
que não está disponível, retorne no console: “Não trabalhamos com
este tipo de automóvel aqui”.*/

let car = "fusca"

switch (car){
    case " hatch":
    console.log(" compra efetuada com sucesso")
    break
    
    case " sedans":
    console.log ("tem certeza que não prefere esse modelo ? ")
    break

    case " motocicletas" :
        console.log("tem certeza que não prefere esse modelo ? ")
        break

    case " caminhonetes " :
        console.log("tem certeza que não prefere esse modelo ? ")
        break
    
    default:
    console.log(" não trabalhamos com esse tipo de imovel aqui  ")
    
}