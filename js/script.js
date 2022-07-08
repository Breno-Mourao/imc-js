function calcularImc() {
    // declarando variáveis
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let result = document.getElementById('result');
    let imc = document.getElementById('imc');

    // substitiu vírgula por ponto
    altura = altura.replace(',','.');
    peso = peso.replace(',','.');

    // calculo IMC
    let calculo = peso/(altura*altura);

    // arredondando valor
    calculo = calculo.toFixed(2);

    // mostra no tela o imc do usuário
    result.innerHTML = 'Seu IMC é <strong>' + calculo.replace('.',',') + '</strong><br>';

    // mostra se o usuário está dentro do peso ideal ou não
    if (calculo < 18.5) 
        imc.innerHTML = 'Você está abaixo do peso ideal.';
    else if (calculo >= 18.5 && calculo <= 24.9)
        imc.innerHTML = 'Você está no peso ideal.';
    else if (calculo >= 25 && calculo <= 29.9)
        imc.innerHTML = 'Você está acima do peso ideal.';
    else if (calculo >= 30 && calculo < 40)
        imc.innerHTML = 'Você está com obesidade.';
    else
        imc.innerHTML = 'Você está com obesidade morbida.';

    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
}

function verificarInput(event) {
    let letra = event.key;
  
    if (letra != 0 && letra != 1 && letra != 2 && letra != 3 && letra != 4 && letra != 5 && letra != 6 && letra != 7 && letra != 8 && letra != 9 && letra != ',' && letra != '.' && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
    alert('Caractere inválido')
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    }
}