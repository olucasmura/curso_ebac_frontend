document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    if (campoB > campoA) {
    alert('Formulário válido! Número B é maior que o número A.');
    } else {
    alert('Formulário inválido! Número B precisa ser maior que o número A.');
    }
});