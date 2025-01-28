let btn = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let fechar = document.getElementById('btn-fechar')


btn.addEventListener('click', ()=>{
    menu.classList.add('abrie-menu')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrie-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrie-menu')
})
fechar.addEventListener('click', ()=>{
    menu.classList.remove('abrie-menu')
})