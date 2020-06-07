var todasPiadas = piadas;
var piadasFavoritas = [];
window.onload = carregarPiadasFavoritas();
function carregarPiadasFavoritas() {
    todasPiadas.forEach(piada => {
        if (localStorage.getItem("piada-"+piada.cod) == "cheio") {
            piadasFavoritas.push(piada);
            document.querySelector("#listagem").innerHTML += montaPiadaCategoria(piada);
            document.querySelector("#nenhum-favorito").style.display = "none"; 
        }
    });

}