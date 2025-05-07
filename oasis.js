const cad_liv = document.getElementById("CadastrarLivro");
const form = document.getElementById("formLivro");

document.getElementById("CadastrarLivro").addEventListener("click", function(event){
    event.preventDefault();
    form.style.display = "block";
});

const lista = document.getElementById("listaLivros");
const biblio = document.getElementById("biblioteca");

document.getElementById("biblioteca").addEventListener("click", function(event){
    event.preventDefault();
    lista.style.display = "block";
})
;

