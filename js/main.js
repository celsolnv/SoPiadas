function montaPiadaCategoria(piada,indexPiada) {
    let piadaText = "";
    let piadaList = piada.texto.split("- ");
    let piadaCod = piada.cod;
    let tamanhoList = piadaList.length;
    let categoria = piada.categoria;
    if (categoria=="Bebados"){
        categoria = "Bêbados";
    }
    let urlFavorite = "";
    if (localStorage.getItem("piada-"+piadaCod) == "cheio") {
        urlFavorite = "../static/favorite_cheio.svg"
    }
    else{
        urlFavorite = "../static/favorite_vazio.svg"
    }
    let cardAcoes = '<hr>\
    <div class="card-acoes">\
        <div class="favorito" onclick=favorite('+piadaCod+')>\
            <img src="'+urlFavorite+'" alt="coração vazio" id="favorite-'+piadaCod+'">\
        </div>\
        <div class="compartilhar" onclick=share('+piadaCod+')>\
            <img src="../static/share.svg" alt="compartilhar">\
        </div>\
    </div>';

    piadaList.forEach( (item,index) => {
        if(index==tamanhoList-1 && index>2){
            piadaText += "<p class='mais'>"+item+"</p></div>";
        }
        else if (index==2){
            // piadaText += "<span class='ler-mais'"+ 'onclick=javascript:mostrarMais(document.querySelectorAll(".container-ler-mais")['+indexPiada+'])'+ ">Ler mais</span>";
            piadaText += "<span class='ler-mais' id='ler-mais-"+piadaCod+"' onclick=mostrarMais("+piadaCod+") >Ler mais</span>";
            piadaText += "<div class='container-ler-mais' id='piada-"+piadaCod+"'><p class='mais'>"+item+"</p>";
        }
        else if (index>2){
            piadaText += "<p class='mais'>"+item+"</p>";
        }
        else{
            piadaText += "<p>"+item+"</p>";
        }

    });

    let card = '<div class="card"><h5 class="card-title">'+categoria+'</h5>';
    card += '<div class="card-text">'+piadaText+'</div>'+cardAcoes+'</div>';
    return card;

}
function mostrarMais(idElemento) {
    let lerMaisButton = document.querySelector("#ler-mais-"+idElemento);
    let elemento = document.querySelector("#piada-"+idElemento)
    elemento.style.display = "inline";
    lerMaisButton.style.display = "none";
}
function favorite(codPiada) {
    piadas.forEach(piada => {
        if (piada.cod==codPiada) {
            let caminho = document.querySelector("#favorite-"+codPiada).src.split("/");
            let valor = caminho[caminho.length-1];
            if (valor=="favorite_vazio.svg") {
                document.querySelector("#favorite-"+codPiada).src = "../static/favorite_cheio.svg"
                localStorage.setItem(("piada-"+codPiada),"cheio")
            }
            else{
                document.querySelector("#favorite-"+codPiada).src ="../static/favorite_vazio.svg";
                localStorage.setItem(("piada-"+codPiada),"vazio")
            } 
        }
    });
}
function share(idPiada) {
    console.warn("Compartilhando dados!!!");
    let mensagem = "";
    piadas.forEach(piada => {
        if (piada.cod==idPiada) {
            mensagem = piada.texto;
            console.log(mensagem);
            window.plugins.socialsharing.share(mensagem);
            return;
        }
    });
}