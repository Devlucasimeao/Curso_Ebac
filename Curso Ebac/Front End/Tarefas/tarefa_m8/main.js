const form  = document.getElementById('form-Agenda');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();


    form.reset();
});

function adicionaLinha() {
        const inputNome = document.getElementById('nome-contato'); 
    const inputNumero = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td> ${inputNome.value}</td>`;
    linha += `<td> ${inputNumero.value}</td>`;
    linha += '</tr>'; 

    linhas += linha;


}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}