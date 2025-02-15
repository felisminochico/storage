//alert('Olá, Mundo!');
//Variaveis Globais
let usuario = this.document.getElementById('usuario');
let senha = this.document.querySelector('input#senha');
let botaoVerificar = this.document.getElementsByTagName('button')[0];
let acessoFelismino = window.document.getElementById('acessoFelismino');
let mensagemErro = this.document.getElementById('msg-erro');

//console.log(mensagemErro)
//Eventos
botaoVerificar.addEventListener('click', verificarDados);
usuario.addEventListener('input', verificarDadosDigitados)
senha.addEventListener('input', verificarDadosDigitados)

//Função para Verificar os dados digitados
function verificarDadosDigitados(){
    if(usuario.value.length < 3 || senha.value.length < 6){
        botaoVerificar.disabled = true;
        botaoVerificar.style.backgroundColor = 'rgb(70, 145, 70)';
        botaoVerificar.style.cursor = 'auto';
    }else{
        botaoVerificar.disabled = false
        botaoVerificar.style.backgroundColor = 'rgb(2, 60, 2)'
        botaoVerificar.style.cursor = 'pointer'
    }
}

//Função para verificar dados de acessso
function verificarDados(){
    botaoVerificar.style.cursor = 'auto'
    mensagemErro.style.display = 'none'
    if(usuario.value == "felisminochico" && senha.value == 399471){
        // window.document.body.style.cursor = 'progress'
        botaoVerificar.innerHTML = 'Verificando...';
        botaoVerificar.disabled = true
        botaoVerificar.style.backgroundColor = 'rgb(70, 145, 70)'
        setTimeout(function(){
            botaoVerificar.innerHTML = 'Usuário encontrado';
            botaoVerificar.style.backgroundColor = 'rgb(2, 60, 2)'
            acessoFelismino.style.display = 'block'
        }, 5000)
    }else{
        botaoVerificar.innerHTML = 'Verificando...'
        botaoVerificar.style.backgroundColor = 'rgb(70, 145, 70)'
        botaoVerificar.disabled = true;
        setTimeout(function(){
            mensagemErro.style.display = 'block';
            botaoVerificar.disabled = false;
            botaoVerificar.style.backgroundColor = 'rgb(2, 60, 2)'
            botaoVerificar.style.cursor = 'pointer'
            botaoVerificar.innerHTML = 'Verificar'
        }, 5000)
    }
}