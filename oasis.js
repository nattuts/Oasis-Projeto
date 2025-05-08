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
});

const formLivro = document.getElementById('formLivro');
formLivro.addEventListener('submit', function(event){
    event.preventDefault();
    alert("");
});

const formPesquisa = document.getElementById('formPesquisa');
const inputPesquisa = document.getElementById('inputPesquisa');

formPesquisa.addEventListener('submit', function(event){
    const pesquisa = inputPesquisa.value.trim();
    if(pesquisa == ""){
        event.preventDefault();
        alert("Você precisa digitar alguma coisa");
    }
});