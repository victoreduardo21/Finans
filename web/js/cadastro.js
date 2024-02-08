const senha = document.getElementById('senha');
const icone = document.getElementById ('icone');

function mostraesconder(){
    if(senha.type ==='senha'){
        senha.setAttribute('type','text');
        icone.classList.add('esconder')
    }
    else{
        senha.setAttribute('type','senha');
        icone.classList.remove('esconder');
    }
}