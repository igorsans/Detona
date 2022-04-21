function play() {
    var audio = new Audio('./audio/coin.mp3');
    audio.play();
}
var usuarioName0;
var usuarioName;
var idadeUser;
var resultneg;
var teste;
function primeiraLetraMaiuscula(teste) {
    return teste.charAt(0).toUpperCase() + teste.slice(1);
}
function pegarNomeUsuario() {
    while (usuarioName == "" || usuarioName == null) {
        usuarioName0 = prompt('Digite seu nome!');
        usuarioName = primeiraLetraMaiuscula(usuarioName0)
        console.log(usuarioName)
    }
    localStorage.setItem('usuarioName', usuarioName);
}
function verificarIdade(idadeUser) {
    while (idadeRes != false) {
        idadeUser = (prompt('Digite a sua idade!\nSomente Numeros!'));
        var redondo = parseInt(idadeUser)
        var idadeRes = isNaN(redondo);
        resultadoneg = Math.sign(redondo)
        if (resultadoneg < 1) {
            idadeRes = true;
        }
    }
    localStorage.setItem('idadeUser', redondo);
    setTimeout(() => {
        window.location.href = "./personagens/choseChar.html";
    }, 550);

}