let btn = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let fechar = document.getElementById('btn-fechar')

btn.addEventListener('click', abrirMenu)

menu.addEventListener('click', fecharMenu)

overlay.addEventListener('click', fecharMenu)

fechar.addEventListener('click', fecharMenu)

function abrirMenu(){
    menu.classList.add('abrie-menu')
}

function fecharMenu(){
    menu.classList.remove('abrie-menu')
}