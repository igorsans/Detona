var idade = localStorage.getItem('idadeUser');
var vidasUser = 4


function fase1() {
    while (!false) {
        console.log(idade);
        if (vidasUser < 1) {
            alert('Game Over\nInsira outra ficha e tente novamente');
            break;
        }
        console.log(idade);
        var resUsuario = prompt('O que você fará?');
        if (resUsuario.toLowerCase() == 'b' && idade <= 20) {
            alert('foi jovem')
            return true
        } else if (resUsuario.toLowerCase() == 'c' && idade > 20) {
            alert('foi senhor')
            return true
        } else if (resUsuario.toLowerCase() == 'a') {
            vidasUser-- 
            alert(`não foi\nVidas: ${vidasUser}`)
        } else if ((resUsuario.toLocaleLowerCase() == 'c' && idade <= 20) || resUsuario.toLocaleLowerCase() == 'b' && idade > 20 ){
            vidasUser--
            alert(`não foi\nVidas: ${vidasUser}`)
        } else {
            alert(`Não entendi`)
        }
    }
}