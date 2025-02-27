//alert("Olá, Mundo!");
let botaoMenu = this.document.getElementById('btn-menu');
let tagNav = this.document.getElementsByTagName('nav')[0];

botaoMenu.addEventListener('click', mostrarFecharMenu)

function mostrarFecharMenu(){
    if(tagNav.style.marginLeft < '0px'){        
        tagNav.style.marginLeft = '0px';
    }else{
        tagNav.style.marginLeft = '-300px'
    }
}