//Faça um script que verifique se uma letra digitada num campo de
//input é vogal ou consoante.

var letra = String(prompt(" digite uma letra"))

if( letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u")
    {
    document.write(" a letra é vogal:")

}
else{
    document.write("a letra é consoante ")
}