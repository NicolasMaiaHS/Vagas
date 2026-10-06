let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let empresa = document.getElementById("empresa").value;
    let vaga = document.getElementById("vaga").value;
    let local = document.getElementById("local").value;

    let tabela = document.getElementById("listaVagas");

    let novaVaga = tabela.insertRow();

    novaVaga.insertCell(0).textContent = empresa;
    novaVaga.insertCell(1).textContent = vaga;
    novaVaga.insertCell(2).textContent = local;

    formulario.reset();

});
