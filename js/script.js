exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `Informar número válido, o número ${num} não é positivo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    let primo = true; // declarei variave para primo

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }

    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (result.innerText = `O número ${num} não é primo!`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `Este número não é válido, por favor insira um número maior!`;
  } else {
    resultado.innerText = " ";
    error.innerText = " ";
    for (let i = 0; i <= 10; i++) {
      resultado.innerHTML += `${num} x ${i} = ${num * i} <br>`;
      error.innerText = "";
    }
  }
};
//-----------------------------------------------------
const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let contador = 0;
  result.innerText = "";

  while (num >= contador) {
    if (contador % 2 !== 0) result.innerText += `${contador}. `;
    contador++;
  }
};
//-----------------------------------------------------------------------
const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  let contador = 0;
  let soma = 0;
  result.innerText = "";

  while (num >= contador) {
    if (contador % 2 == 0) {
      soma += contador;
    }
    contador++;
    result.innerHTML = soma;
  }
};

//--------------------------------------------------------------
const exercicio7 = () => {
  let cont = 10;
  let result = document.getElementById("resposta");

  while (cont > 0) {
    result.innerText += `${cont}, `;
    cont--;
  }
};
//------------------------------------------------------------
const exercicio9 = () => {
  let somar = 0;

  let result = document.getElementById("resposta");

  for (let i = 1; i <= 100; i++) {
    somar += i;
  }

  result.innerText = `${somar}`;
};
