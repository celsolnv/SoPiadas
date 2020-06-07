var categorias =  ["Bebados", "Loiras", "Curtas", "Joãozinho", "Adivinhas", "Sacanagem", "Bichas", "Sogras", "SMS", "Caipiras", "Qual", "Português", "Cornos", "Papagaios", "Japoneses", "Advogados", "Pontinhos", "Casais", "Crianças", "Frases", "Diversas", "Velhos", "Argentinos", "Animais", "Religião", "Loucos", "Políticos", "Feministas", "Estagiários", "Futebol", "Machistas", "Gauchos", "Garçons", "Cúmulos", "Judeus", "Informática", "Carnaval", "Super", "Científicas", "Cretinas", "Carreira", "Cubanos", "Elefantes"]
categorias.sort()
window.onload = carregarCategorias();
var todasPiadas = piadas;

function carregarCategorias() {
   let lista = '<ul class="list-group">';
   categorias.forEach(categoria => {
    if (categoria=="Bebados"){
        categoria = "Bêbados";
    }
       lista += '<li onclick=abrirCategoria("'+categoria+'") class="list-group-item">'+categoria+'</li>';
   });
   document.querySelector("#listagem").innerHTML = lista;
}
function carregarPiadasCategoria(piadaCategoria) {
    let cards = "" ;
    for (let i = 0; i < piadaCategoria.length; i++) {
        let piada = piadaCategoria[i];
        cards += montaPiadaCategoria(piada,i);
    }
    document.querySelector("#piadas").innerHTML += cards
}
function abrirCategoria(nomeCategoria) {
    let piadaCategoria = [];
    document.querySelector("#listagem").style.display = "none";
    todasPiadas.forEach(piada => {
        if (piada.categoria==nomeCategoria) {
            piadaJson = {"categoria":piada.categoria,"texto":piada.texto,"cod":piada.cod}
            piadaCategoria.push(piadaJson)
        }
    });
    console.log(piadaCategoria)
    carregarPiadasCategoria(piadaCategoria);
}
