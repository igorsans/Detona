var idade = localStorage.getItem('idadeUser');
var vidas = 4


function fase1(){
    while (!false){
        console.log(idade);
        if (vidas < 1){
            alert('Game Over\nInsira outra ficha e tente novamente');
            break;
        }
        console.log(idade);
        var resUsuario = prompt('O que você fará?');
        if (resUsuario == 'b' && idade <=20){
            alert('foi jovem')
            return true
        } else if (resUsuario == 'c' && idade > 20){
            alert('foi senhor')
            return true
        } alert('não foi')


    }
}