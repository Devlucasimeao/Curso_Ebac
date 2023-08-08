const form = document.getElementById('form-htlm');
let formValido = false; 


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const mensagemSucesso = `numero b : <b>${valorNumeroB.value}</b>  é maior que o numero a: <b>${valorNumeroA.value} </b>   `;
    
    formValido = validaNumero(nomeBeneficiario.value)
    if (formValido) {
        const containerMesagemSucesso = document.querySelector('.success-message');
        containerMesagemSucesso.innerHTML = mensagemSucesso;
        containerMesagemSucesso.style.display = 'block' ;
    
        numeroA.value = '';
        numeroB.value = '';
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
