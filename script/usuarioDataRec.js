// export default usuarioName;
function pegarNomeUsuario(){
var usuarioName = prompt('Digite aqui o seu nome!');
localStorage.setItem('usuarioName',usuarioName);
var localSName = localStorage.getItem('usuarioName');
}
pegarNomeUsuario();


var sabor = 'teste';
console.log(sabor);
module.export = {sabor}