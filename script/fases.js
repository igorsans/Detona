var msgPergunta;
var resCerta;
var resErrada;
var resErrada1;
var msgResCerta;
var msgResErrada;
var msgResErrada1;
var resUser;
var vidas = 2
var proximapagina;

function validarResposta(msgPergunta, resCerta, resErrada, resErrada1, msgResCerta, msgResErrada, msgResErrada1,proximapagina) {
    
    while (!false) {
        if (vidas < 1){
            alert('Game Over\nInsira outra ficha e tente novamente');
            break;
        }
        var resUser = prompt(msgPergunta);
        if (resUser.toLowerCase() == resCerta) {
            alert(msgResCerta);
            window.location.href = proximapagina;
            return true;
        } else if (resUser.toLowerCase() == resErrada) {
            vidas--
            alert(`${msgResErrada}\nVidas Restantes = ${vidas}`)
            
        } else if (resUser.toLowerCase() == resErrada1) {
            vidas--
            alert(`${msgResErrada1}\nVidas Restantes = ${vidas}`)
            
        } else {
            alert('Não capitei a sua mensagem');
        }
    } 

}