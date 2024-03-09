var seta = document.getElementById('seta');
var login = document.getElementById('login');
var cad = document.getElementById('cadastro');
var menu = document.getElementById('menu');

function cadastrar() {
    seta.style.display = 'block';
    login.style.display = 'none';
    cad.style.display = 'flex';
    menu.style.display = 'block';
}

function voltar() {
    seta.style.display = 'none';
    login.style.display = 'flex';
    cad.style.display = 'none';
    menu.style.display = 'none';
}