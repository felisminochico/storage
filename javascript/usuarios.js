//alert("Olá, Mundo!");
let botaoMenu = this.document.getElementById('btn-menu');
let tagNav = this.document.getElementsByTagName('nav')[0];
let tagMain = this.document.getElementsByTagName('main')[0];

botaoMenu.addEventListener('click', mostrarFecharMenu)
tagMain.addEventListener('click', fecharMenu)

function mostrarFecharMenu(){
    if(tagNav.style.marginLeft < '0px'){        
        tagNav.style.marginLeft = '0px';
        tagMain.style.filter = 'blur(7px)';
    }else{
        tagNav.style.marginLeft = '-300px';
        tagMain.style.filter = 'blur(0px)';
    }
}

function fecharMenu(){
    tagNav.style.marginLeft = '-300px';
    tagMain.style.filter = 'blur(0px)';
}