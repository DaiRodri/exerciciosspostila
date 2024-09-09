let texto

    switch (new Date ().getDate()){
    
        case 6:
        texto = " hoje é sabado"
        break
    
        case 0:
        texto = " hoje é domingo"
        break
            
        default:
        texto = " na espera do final de semana"
}
document.getElementById("demo").innerHTML = texto
