let btnTopo = document.getElementById("btnTopo");

document.addEventListener("DOMContentLoaded", main);

function main(){
    window.addEventListener("scroll", mostrarBotao);

    btnTopo.addEventListener("click", voltarTopo);
}

function mostrarBotao(){
    if (window.scrollY > 200) {
        btnTopo.classList.add("show");
    } else {
        btnTopo.classList.remove("show");
    }
}

function voltarTopo(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
