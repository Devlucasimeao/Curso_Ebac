const form = document.getElementById('form-html');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false; 

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b>   depositado para o cliente : <b>${nomeBeneficiario.value} </b>  - conta    <b>${numeroContaBeneficiario.value}</b>`;
    
    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        const containerMesagemSucesso = document.querySelector('.success-message');
        containerMesagemSucesso.innerHTML = mensagemSucesso;
        containerMesagemSucesso.style.display = 'block' ;
    
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value); 
    formValido = validaNome(e.target.value) 

    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }


})
