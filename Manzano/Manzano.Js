
//LAÇO DE REPETIÇÃO ENQUANTO/WHILE
//Exercicio A pag 46

function A1() {
  let valor = parseInt(document.getElementById("valor").value)
  let contador = 1;

  while (contador <= 10) {
    let tabuada = valor * contador
    document.getElementById(`${contador}`).innerHTML = valor + " X " + contador + " = " + tabuada + "<br>"
    contador++
  }
}

//Exercicio B pag 46
function B1() {
  let contador = 1
  let soma = 0

  while (contador <= 100) {
    soma = Number(soma + contador)
    contador++
  }

  document.getElementById("mostra").innerHTML = "O resultado da soma dos números inteiro de 1 ate 100 é " + soma
}
//Exercicio C pag 46

function C1() {
  let contador = 2
  let soma = 0

  while (contador <= 500) {
    soma += contador
    contador += 2
  }

  document.getElementById("mostra").innerHTML = `A soma dos pares de 1 ate 500 é ${soma}`
}
//Exercicio D pag 46

function D1() {
  let contador = 0

  while (contador <= 20) {

    if (contador % 2 != 0) {
      alert(contador)
      document.getElementById(`${contador}`).innerHTML = contador
    }
    contador++
  }
}

//Exercicio E pag 46
function E1() {
  let contador = 1
  let potencia = 1
  alert("3 elevado a 0 é 1")

  while (contador <= 15) {
    potencia *= 3
    alert("3 elevado a " + contador + " é " + potencia)
    contador++
  }
}

//Exercicio F pag 46

function F1() {

  let base = Number(prompt('Escreva a base da operação:'));
  let expoente = Number(prompt('Escreva a exponenciação da operação:'));
  let contadora = 1;
  let potencia = 1;

  while (contadora <= expoente) {
    potencia *= base;
    contadora++
  }
  document.getElementById('mostra').innerHTML = (base + " elevado a " + expoente + " é = " + potencia)
}


//Exercicio G pag 46

function G1() {
  let contador = 1
  let numeroAtual = 1
  let numeroAtecessor = 0
  let soma = 0
  alert(numeroAtual)

  while (contador < 15) {
    soma = numeroAtual + numeroAtecessor
    alert(soma)
    numeroAtecessor = numeroAtual
    numeroAtual = soma
    contador++
  }
}

//Exercicio H pag 46

function H1() {
  let celsius = 10;
  let fahrenheit = 0

  while (celsius <= 100) {
    fahrenheit = (9 * celsius + 160) / 5
    console.log(celsius + "° graus celsius = " + fahrenheit + "° graus fahrenheit")
    celsius += 10
  }
}

//Exercicio I pag 46

function I1() {
  let contador = 1
  let soma = 0
  let media = 0

  while (contador <= 10) {
    let valores = Number(prompt(`Digite o ${contador} número`))
    soma += valores
    media = soma / contador
    contador++
  }
  document.getElementById('mostra').innerHTML = (`A soma dos valores digitados é ${soma} <br> A média aritimética dos valores é ${media}`)
}

//Exercicio J pag 46

function J1() {
  let contador = 50
  let soma = 0;
  let pares = 0

  while (contador <= 70) {

    if (contador % 2 == 0) {
      soma += contador
      pares++
    }
    contador++
  }

  let media = soma / pares

  document.getElementById("mostra").innerHTML = "A soma dos valores pares de 50 ate 70 é " + soma + "<br> A média dos números é " + media
}
//Exercicio K pag 46

function K1() {
  let continuar = 'sim'
  let area = 0
  let areaTotal = 0
  let comodos = 0

  while (continuar == 'sim') {
    let comodo = prompt("Digite o nome do cômodo")
    let largura = Number(prompt("Digite a largura do cômodo"))
    let comprimento = Number(prompt("Digite o comprimento do cômodo"))

    area = largura * comprimento

    alert(`A área do cômodo ${comodo} é ${area}m2`)
    areaTotal += area
    comodos++
    continuar = prompt("Quer continuar a calcular novos cômodos? (sim/não)")
  }
  alert(`Quntidade de cômodos lidos: ${comodos}`)
  alert(`A soma total da área dos comodos lidos é: ${areaTotal}m2`)
}


//LAÇO DE REPETIÇÃO DO/REPITA
//Exercico A pag 50

function A2() {
  let i = 15;

  do {
    alert(i * i);
    i++;
  } while (i <= 200);

}

//Exercico B pag 50
function B2() {

  let i = 1;
  let somaPares = 0;

  do {
    if (i % 2 === 0) {
      somaPares += i;
    }
    i++;
  } while (i <= 500);

  alert("O somatório dos valores pares de 1 a 500 é: " + somaPares);
}

//Exercico C pag 50
function C2() {

  let contador = 1;

  while (contador < 200) {
    if (contador % 4 === 0) {
      alert(contador);
    }
    contador++;
  }
}

//Exercico D pag 50
function D2() {
  let numQuadros = 64;
  let graos = 1;
  let somaGraos = 1;

  let i = 2;

  do {
    graos *= 2;
    somaGraos += graos;
    i++;
  } while (i <= numQuadros);

  alert(`O número total de grãos no tabuleiro é ${somaGraos}.`);

}

//Exercico E pag 50
function E2() {
  let contador = 1;
  let total = 0;

  do {
    let valor = parseInt(prompt(`Informe o ${contador}º valor:`));

    let fatorial = 1;
    for (let i = 2; i <= valor; i++) {
      fatorial *= i;
    }

    total += fatorial;

    contador++;
  } while (contador <= 15);

  alert(`O total do somatório das fatoriais é ${total}.`);
}

//Exercico F pag 50
function F2() {
  let soma;
  let totalValores;
  let numero = parseInt(prompt("Digite um número:"));
  document.getElementById('manzano').innerHTML = resultado;

  do {

    if (numero >= 0) {
      soma += numero;
      totalValores++;
    }
  }

  while (numero >= 0);

  if (totalValores > 0) {
    let media = soma / totalValores;
    alert('Total da soma: ' + soma);
    alert('Média aritmética:' + media);
    alert('Total de valores lidos:' + totalValores);
  }

  else {
    alert("Nenhum valor foi lido.");
  }
}

//Exercicio G pag 50

function G2() {
  let num = 1;
  let fatorial;

  do {

    if (num % 2 !== 0) { // se o número for ímpar
      fatorial = 1;

      for (let i = num; i >= 1; i--) { // calcula o fatorial do número
        fatorial *= i;
      }
      alert(`O fatorial de ${num} é ${fatorial}`);
    }
    num++;
  }

  while (num <= 10);
}

//Exercicio H pag 50

function H2() {
  let areaTotal = 0;
  let resposta = "SIM";

  do {
    // solicita a entrada do nome, largura e comprimento do cômodo
    let nome = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo em metros:"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo em metros:"));

    // calcula a área do cômodo
    let area = largura * comprimento;

    // exibe a área do cômodo e solicita confirmação do usuário
    alert(`A área do cômodo ${nome} é ${area} metros quadrados.`);
    resposta = prompt("Deseja calcular a área de mais algum cômodo? (SIM/NAO)").toUpperCase();

    // adiciona a área do cômodo à área total da residência
    areaTotal += area;
  }

  while (resposta === "SIM");

  // exibe a área total da residência
  alert('A área total da residência é:' + areaTotal);
}

//Exercicio I pag 50

function I2() {
  let maior = 0;
  let menor = 0;
  let valor = parseInt(prompt("Digite um valor positivo inteiro (ou um valor negativo para encerrar a leitura):"));

  do {

    if (valor > 0) { // se o valor for positivo

      if (maior === 0 || valor > maior) { // verifica se é o maior valor
        maior = valor;
      }

      if (menor === 0 || valor < menor) { // verifica se é o menor valor
        menor = valor;
      }
    }
  }

  while (valor >= 0);

  alert('O maior valor informado foi:' + maior);
  alert('O menor valor informado foi: ' + menor);
}

//Exercicio J pag 50

function J2() {
  let dividendo = parseInt(prompt("Digite o dividendo:"));
  let divisor = parseInt(prompt("Digite o divisor:"));
  let quociente = 0;

  while (dividendo >= divisor) {
    dividendo = dividendo - divisor;
    quociente++;
  }

  alert('O resultado inteiro da divisão:' + quociente);
}

//LAÇO DE REPETIÇÃO FOR/PARA
//Execicio A pag 66

function A3() {
  for (let i = 15; i <= 200; i++) {
    let quadrado = i * i;

    alert(`O quadrado de ${i} é ${quadrado}.`);
  }
}

//Execicio B pag 66

function B3() {

  let number = parseInt(prompt("Digite um número para ver sua tabuada:"));

  for (let i = 1; i <= 10; i++) {
    let resultado = number * i;

    alert(`${number} x ${i} = ${resultado}`);
  }
}

//Execicio C pag 66

function C3() {
  let soma1 = 0;

  for (let i = 1; i <= 100; i++) {
    soma1 += i;
  }

  alert('A soma dos cem primeiros números inteiros é:' + soma1);
}

//Execicio D pag 66

function D3() {

  let soma = 0;

  for (let i = 1; i <= 500; i++)
    if (i % 2 === 0) {
      soma += i;
    }
}

alert(`O somatório dos valores pares de 1 a 500 é: ${soma}`);

//Execicio E pag 66

function D3() {

  for (let i = 0; i <= 20; i++)
    if (i % 2 !== 0) {
      alert(i);
    }
}

//Execicio F pag 66

function F3() {
  for (let i = 1; i < 200; i++) {
    if (i % 4 === 0) {
      alert(i);
    }
  }
}

//Execicio G pag 66

function G3() {
  for (let i = 1; i < 200; i++) {
    if (i % 4 === 0) {
      alert(i);
    }
  }
}

//Execicio H pag 66

function H3() {
  // solicita ao usuário que informe o valor da base e do expoente
  let base = parseInt(prompt("Informe o valor da base: "));
  let expoente = parseInt(prompt("Informe o valor do expoente: "));

  // inicializa a variável resultado com o valor da base
  let resultado = base;

  // realiza o cálculo da potência utilizando o laço de repetição "for"
  for (let i = 1; i < expoente; i++) {
    resultado = resultado * base;
  }

  // exibe o resultado da potência na tela
  alert(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`)
}
//Execicio I pag 66
function I3() {

  let num1 = 1;
  let num2 = 1;
  let fibonacci = num1 + ", " + num2;

  for (let i = 3; i <= 15; i++) {
    let num3 = num1 + num2;
    fibonacci += ", " + num3;
    num1 = num2;
    num2 = num3;
  }

  alert("Série de Fibonacci até o décimo quinto termo:");
  alert(fibonacci);


}
//Execicio J pag 66
function J3() {
  for (let c = 10; c <= 100; c += 10) {
    let f = (9 / 5) * c + 32;
    alert(`${c}°C = ${f}°F`);
  }

}

//Execicio K pag 66
function K3() {
  let fatorial = 1;

  for (let i = 1; i <= 10; i += 2) {
    for (let j = 1; j <= i; j++) {
      fatorial *= j;
    }
    alert(`O fatorial de ${i} é ${fatorial}`);
    fatorial = 1;
  }
}