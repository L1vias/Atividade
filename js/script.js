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

//-----------------------------------
const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

//----------------------------------------------------
const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let resposta = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let contador = 0;
  let somar = 0;
  resposta.innerHTML = "";
  error.innerText = "";

  if (num <= 0) {
    error.innerText = "Favor informar um número posítivo válido";
  } else {
    while (contador <= num) {
      somar += contador;
      contador++;
    }

    let media = somar / num;
    resposta.innerHTML += `a soma é ${somar}<br>`;
    resposta.innerHTML += `A média é ${media}`;
  }
};
//----------------------------------------------------------------------
const exercicio11 = () => {
  let result = document.getElementById("resposta");
  for (let i = 0; i < 100; i++) {
    if (i % 3 == 0) result.innerHTML += `#${i}<br>`;
  }
};

//---------------------------------------------------------------------
const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  result.innerHTML = "";

  if (num < 10) {
    error.innerHTML = "Favor informar um número de DOIS digitos ou mais!";
  } else {
    for (let i = 0; i < num.length; i++) {
      soma += parseInt(num.charAt(i));
    }
  }
  result.innerText = `A soma dos digitos ${num} é ${soma}`;
};
//-------------------------------------------------------------
const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }

  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O número ${num1} ou o número ${num2} não é valido`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let i = menor; i <= maior; i++) {
      let teste = verificaPrimo(i);
      if (teste) {
        result.innerText += `${i}`;
      }
    }
  }
};

function verificaPrimo(numero) {
  let primo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) primo = false;
  }
  return primo;
}
//----------------------------------------------------
const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = num1 * num2;

  if (num1 <= 0 || num2 <= 0) {
    error.innerHTML = "Favor informar um número positivo";
    result.innerHTML = "";
  } else {
    error.innerText = "";
    result.innerText = `A área do retângulo é ${area}`;
  }
};

// const exercicio15 = () => {
//   let palavra = document.getElementById("palavra").value;
//   let vogais =  [],
//   consoante = [];
//   let error = document.getElementById("erro");
//   let result = document.getElementById("resultado")

//   if()
// }
//---------------------------------------------------------------
const exercicio16 = () => {
  let num1 = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let pi = 3.14;
  let area = pi * num1 ** 2;

  if (num1 <= 0) {
    result.innerHTML = "";
    error.innerText = "Favor informar um número positivo";
  } else {
    error.innerText = "";
    result.innerText = `A área do circulo é ${area}`;
  }
};
//------------------------------------------------------------------

const exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = (num1 * num2) / 2;

  if (num1 <= 0 || num2 <= 0) {
    error.innerHTML = `Favor informar um número positivo`;
    result.innerHTML = "";
  } else {
    error.innerText = "";
    result.innerText = `A área do retângulo é ${area}`;
  }
};

const exercicio18 = () => {
  let num1 = document.getElementById("num1").value * 1;
  let num2 = document.getElementById("num2").value * 1;
  let num3 = document.getElementById("num3").value * 1;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = ((num1 + num2) * num3) / 2;

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    error.innerHTML = `Favor informar um número positivo`;
    result.innerHTML = "";
  } else {
    error.innerText = "";
    result.innerText = `A área do trapézio é ${area}`;
  }
};

const exercicio19 = () => {
  let dataI = document.getElementById("data").value;
  let atual = new Date();
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  result.innerText = "";
  error.innerText = "";

  if (data == "") {
    error.innerText = "informar data!";
  } else {
    error.innerText = "";
    dataI = new Date(dataI);

    let diference = atual.getTime() - dataI.getTime();

    let idade = Math.floor(diference / (1000 * 60 * 60 * 24 * 365.25));
    result.innerText += `idade: ${idade} anos.`;
  }
};

const exercicio20 = () => {
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let frase = document.getElementById("frase").value;
  let inversa = "";

  if (frase === "") {
    error.innerText = "INSERIR FRASE";
    result.innerText = "";
  } else {
    for (var i = frase.length - 1; i >= 0; i--) {
      inversa += frase[i];
    }
    result.innerText = `${inversa}`;
    error.innerText = "";
  }
};

const exercicio21 = () => {
  let result = document.getElementById("resultado");
  let frase = document.getElementById("frase").value;
  let error = document.getElementById("erro");

  if (frase === "") {
    error.innerText = "";
    result.innerText = "";
  } else {
    function removEspaço(frase) {
      let outrafrases = "";
      for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== ` `) outrafrases += frase[i];
      }
      return outrafrases;
    }
    let frase1 = removEspaço(frase);
    result.innerText = `${frase1}`;
    error.innerText = "";
  }
};

let soma = 0;
const exercicio22 = () => {
  let num = document.getElementById("num").value
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  result.innerText = "";

  if (soma <= 100){
    soma +=parseInt(num);
  }

  result.innerText = `a soma total é ${soma}`;
  error.innerHTML ="";
};


const exercicio23 = () => {
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let frase = document.getElementById("frase").value;
  let palavra = document.getElementById("palavra").value;
  let cont = 0;

  if (!isNaN(palavra) || !isNaN(frase)){
    error.innerText = "Não aceito números";
    result.innerText = "";
  }else {
    frase = frase.toLowerCase();
    palavra = palavra.toLowerCase();
    let palavras = frase.split(" ");

    for (var i = 0; i < palavras.length; i++) {
      if (palavras[i] == palavra){
        cont++;
      }
    }

    result.innerHTML = `A palavra ${palavra} aparece ${cont} vezes na frase.`
    error.innerText = "";
  }
};

const exercicio24 = () =>{
let valor =document.getElementById ("frase").value
let frase = valor.split(" ");
let result = document.getElementById("resultado");
let error = document.getElementById("erro");
const letrasMaíusculas = [];
error.innerText = "";
result.innerText = "";
 if (valor == ""){
  error.innerText = "Informe uma frase!";
 }else{
  const mudarFrase = frase.map((palavra) => {
    const primeiraletrasmaiuscula = palavra[0].toUpperCase();
    letrasMaíusculas.push(primeiraletrasmaiuscula);
    return primeiraletrasmaiuscula + palavra.slice(1);
  });
  resultado.innerHTML = `${mudarFrase.join(" ")}`;
 }
};











const exercicio25 = () =>{
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let num3 = document.getElementById("num3").value;
let result = document.getElementById("resultado")
let error = document.getElementById("erro");
let array = []

array.push(num1);
array.push(num2);
array.push(num3);
array.sort((a, b) => a- b);
console.log(array)

if (num1 <= 0 || num2 <= 0 || num3 <= 0){
  error.innerHTML = "apenas números"
}else{
  for (let i = 0; i <= 2; i++) {
    result.innerText += `${array[i]},`
  }
}
}