
document.querySelector("#sanduiche").addEventListener("click",function (event) {
    openSideMenu();
});
document.querySelector("#close-side-menu").addEventListener("click",function (event) {
    closeSideMenu();
});
window.onload = carregarPiadas();

function openSideMenu() {
    let menu = document.querySelector("#sideMenu");
    /*
    */
    menu.style.display = "block";
    setTimeout(() => {
        menu.style.width = "80%";
    }, 100);
    
    // setTimeout(() => {
    //     menu.style.display = "block";
    // }, 95);
    
}
function closeSideMenu() {
    let menu = document.querySelector("#sideMenu");
    /*
    menu.style.display = "none";
    */
    menu.style.width = "0%";
    setTimeout(() => {
        menu.style.display = "none";
    }, 250);
    
}
function montaPiada(piada,indexPiada) {
    let piadaText = "";
    let piadaList = piada.texto.split("- ");
    let piadaCod = piada.cod;
    let tamanhoList = piadaList.lenght;
    piadaList.forEach( (item,index) => {
        if (index==2){
            // piadaText += "<span class='ler-mais'"+ 'onclick=javascript:mostrarMais(document.querySelectorAll(".container-ler-mais")['+indexPiada+'])'+ ">Ler mais</span>";
            piadaText += "<span class='ler-mais' id='ler-mais-"+piadaCod+"' onclick=mostrarMais("+piadaCod+") >Ler mais</span>";
            piadaText += "<div class='container-ler-mais' id='piada-"+piadaCod+"'><p class='mais'>"+item+"<\p>";
        }
        else if (index>2){
            piadaText += "<p class='mais'>"+item+"<\p>";
        }
        else if(index==tamanhoList-1){
            piadaText += "<p class='mais'>"+item+"<\p></div></div>";
        }
        else{
            piadaText += "<p>"+item+"<\p>";
        }

    });
    let card = '<div class="card"><h5 class="card-title">'+piada.categoria+'</h5>';
    card += '<div class="card-text">'+piadaText+'</div></div></div>';
    return card;

}
function mostrarMais(idElemento) {
    let lerMaisButton = document.querySelector("#ler-mais-"+idElemento);
    let elemento = document.querySelector("#piada-"+idElemento)
    console.log(elemento)
    elemento.style.display = "inline";
    lerMaisButton.style.display = "none";
}
function carregarPiadas() {
    let cards = "" ;
    let qtdPiadas = piadas.length;
    for (let i = 0; i < qtdPiadas; i++) {
        let piada = piadas[i];
        cards += montaPiada(piada,i);
    }
    document.querySelector(".container").innerHTML += cards
}
