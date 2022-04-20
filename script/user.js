var idade = localStorage.getItem('idadeUser');
var vidasUser = 4
var nexPag;
var carro;

function fase1(nexPag) {
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
            window.location.href = nexPag;
            return true
        } else if (resUsuario.toLowerCase() == 'c' && idade > 20) {
            alert('foi senhor')
            window.location.href = nexPag;
            return true
        } else if (resUsuario.toLowerCase() == 'a') {
            vidasUser--
            alert(`não foi\nVidas: ${vidasUser}`)
        } else if ((resUsuario.toLocaleLowerCase() == 'c' && idade <= 20) || resUsuario.toLocaleLowerCase() == 'b' && idade > 20) {
            vidasUser--
            alert(`não foi\nVidas: ${vidasUser}`)
        } else {
            alert(`Não entendi`)
        }
    }
}
function nextPag(nexPag) {
    window.location.href = nexPag;
}
function escolherCarro(nexPag) {
    while (!false) {
        var carro = prompt('Escolha seu carro!')
        var carroSelect = carro.toLocaleLowerCase()
        if (carroSelect == 'a') {
            alert('Esse carro parece delicioso, quer dizer, veloz.\nEsse carro é otimo para pistas mais geladas, as rodas de donuts não deixam ele deslizar, só cuidado pra não aquecer o motor dele!');
            localStorage.setItem('carroUser', carroSelect)
            window.location.href = nexPag;
            return true;
        } else if (carroSelect == 'b') {
            alert('Esse carro é irado e esse motor de refrigerante de cola deve ser puro açucar!')
            localStorage.setItem('carroUser', carroSelect)
            window.location.href = nexPag;
            return true;
        } else if (carroSelect == 'c') {
            alert('Um gipe com rodas de rapadura? esse veiculo parece ser indestrutivel e é otimo para pistas mais pesadas!')
            localStorage.setItem('carroUser', carroSelect)
            window.location.href = nexPag;
            return true;
        } else {
            alert('Não capitei sua mensagem!')
        }
    }
}
var carroSelect = localStorage.getItem('carroUser')
function correr(nexPag, carroMsg1,carroMsg2,carroMsg2) {
    while (!false) {
        var pista = prompt('Qual pista?\n a confeiteiro\nb sorvete\nc choquito')
        var pistaSelect = pista.toLocaleLowerCase();
        if (pistaSelect == 'a' || pistaSelect == 'b' || pistaSelect == 'c') {
            if (carroSelect == pistaSelect) {
                alert('foi carro de cola')
                break
            } else if (carroSelect == pistaSelect) {
                alert('foi carro de sorvete')
                break
            } else if (carroSelect == pistaSelect) {
                alert('foi gipe')
                break
            } else {
                alert('errou')
            }
        } else {
            alert('não entendi')
        }
    }
}
