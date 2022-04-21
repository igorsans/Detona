var idade = localStorage.getItem('idadeUser');
var vidasUser = 2
var nexPag;
var carro;

function fase1(nexPag) {
    while (!false) {
        if (vidasUser < 1) {
            alert('Game Over\nTente novamente');
            window.location.href = "../choseChar.html"
            break;
        }
        var resUsuario = prompt(`O que você fará?\nA - Lutar contra os guardas.\nB - Correr!\nC - Dizer que há algo atras de\ntodos eles e aproveitar para correr enquanto eles não estão olhando!`);
        if (resUsuario.toLowerCase() == 'b' && idade <= 20) {
            alert(`Está com todo gás né?\nMostrou que está preparado!\nSe a corrida for a pé ja temos um ganhador!`)
            window.location.href = nexPag;
            return true
        } else if (resUsuario.toLowerCase() == 'c' && idade > 20) {
            alert(`Show de atuação, enquanto eles olhavam e tentavam encontrar algo você sai de fininho!`)
            window.location.href = nexPag;
            return true
        } else if (resUsuario.toLowerCase() == 'a') {
            vidasUser--
            alert(`O que você pensou? eles são muito mais fortes e estão em maior numero.\nVidas: ${vidasUser}`)
        } else if (resUsuario.toLocaleLowerCase() == 'c' && idade <= 20) {
            vidasUser--
            alert(`Eles não vão cair nessa!\nVidas: ${vidasUser}`)
        } else if (resUsuario.toLocaleLowerCase() == 'b' && idade > 20) {
            vidasUser--
            alert(`Que que há velinho?\nJá não está na flor da idade para ficar correndo por ae né?\nVocê tenta correr e eles te alcançam andando.\nVidas: ${vidasUser}`)
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
        var carro = prompt(`Escolha seu carro!\nA - Carro de sorvete com rodas de donut's\nB - Conversivel com roda de mentos e motor de refrigerante de cola\nC - Gipe com rodas de rapadura.`)
        var carroSelect = carro.toLocaleLowerCase()
        if (carroSelect == 'a') {
            alert('Esse carro parece delicioso, quer dizer, veloz.\nEsse carro é otimo para pistas mais geladas, as rodas de donuts não deixam ele deslizar, só cuidado pra não aquecer o motor dele!');
            var carroMsg1 = 'Essa pista foi a escolha ideal para o seu carro ja de inicio o rei doce comeu creme.';
            var carroMsg2 = 'Você arrazou nessa Salada de frutas!';
            localStorage.setItem('carroMsg1', carroMsg1);
            localStorage.setItem('carroMsg2', carroMsg2);
            localStorage.setItem('carroUser', carroSelect);
            window.location.href = nexPag;
            return true;
        } else if (carroSelect == 'b') {
            alert('Esse carro é irado e esse motor de refrigerante de cola deve ser puro açucar!')
            var carroMsg1 = 'Serio, um bolo com um refrigerante combina muito bem!\nDoce Vitoria!.';
            var carroMsg2 = 'Açucar na veia!\nDeu para sentir a energia daqui!';
            localStorage.setItem('carroMsg1', carroMsg1);
            localStorage.setItem('carroMsg2', carroMsg2);
            localStorage.setItem('carroUser', carroSelect);
            window.location.href = nexPag;
            return true;
        } else if (carroSelect == 'c') {
            alert('Um gipe com rodas de rapadura? esse veiculo parece ser indestrutivel e é otimo para pistas mais pesadas!')
            var carroMsg1 = 'Esse carro é muito forte mesmo né?\nParece que você estava andando em nuvens.';
            var carroMsg2 = 'Você é como aquele ditado diz\n Queixo duro de roer\n...\nDeixa pra la, mas você arrazzou na corrida!'
            localStorage.setItem('carroMsg1', carroMsg1)
            localStorage.setItem('carroMsg2', carroMsg2)
            localStorage.setItem('carroUser', carroSelect);
            window.location.href = nexPag;
            return true;
        } else {
            alert('Não capitei sua mensagem!')
        }
    }
}
var carroSelect = localStorage.getItem('carroUser')
var finishMsg1 = localStorage.getItem('carroMsg1')
var finishMsg2 = localStorage.getItem('carroMsg2')
var nivel;
var finishMsg;

function correr(nexPag, nivel) {
    while (!false) {
        if (vidasUser < 1) {
            alert('Game Over\nTente novamente');
            window.location.href = "../choseChar.html"
            break;
        }
        if (nivel == 1) {
            finishMsg = finishMsg1
            var msgTela = 'Qual pista?\nA - Choquito\nB - Sorvete\nC - Confeitero';
            if (carroSelect == 'a') {
                carroSelectNew = 'b';
            } else if (carroSelect == 'b') {
                carroSelectNew = 'c';
            } else if (carroSelect == 'c') {
                carroSelectNew = 'a';
            }
        } else if (nivel == 2) {
            finishMsg = finishMsg2
            var msgTela = 'Qual pista?\nA - Açucar\nB - Mouse salada\nC - Quebra-Queixo'
            if (carroSelect == 'a') {
                carroSelectNew = 'b';
            } else if (carroSelect == 'b') {
                carroSelectNew = 'a';
            } else if (carroSelect == 'c') {
                carroSelectNew = 'c';
            }
        }
        var pista = prompt(msgTela)
        var pistaSelect = pista.toLocaleLowerCase();
        if (pistaSelect == 'a' || pistaSelect == 'b' || pistaSelect == 'c') {
            if (carroSelectNew == pistaSelect) {
                alert(finishMsg)
                window.location.href = nexPag
                break
            } else {
                vidasUser--
                alert(`Seu carro não foi feito para está pista. \nVidas: ${vidasUser}`)

            }
        } else {
            alert('não entendi')
        }
    }
}

