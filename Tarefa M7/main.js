const form = document.getElementById("meu-form");
const resultado = document.getElementById("resultado");


form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede o envio padrão do formulário

    const numeroA = Number(form.elements["numero-a"].value);
    const numeroB = Number(form.elements["numero-b"].value);

    if (numeroB > numeroA) {
    resultado.innerHTML = "Formulário válido!"; 
    } else {
    resultado.innerHTML = "Formulário inválido!";
    }
});