
const convertButton = document.querySelector("#convertButton");
const inputCurrency = document.querySelector("#input-currency");
const currencySelect = document.querySelector("#currency-select");

const valueToConvert = document.querySelector(".currency-value-to-convert");
const convertedValue = document.querySelector(".currency-value");

const currencyImg = document.querySelector("#currency-img");
const currencyName = document.querySelector("#currency-name");

// Cotações exemplo
const dolarHoje = 5.00;
const euroHoje = 5.50;
const libraHoje = 6.40;

// 🔁 Troca bandeira e nome automaticamente
function changeCurrency() {
  if (currencySelect.value === "dolar") {
    currencyImg.src = "./Asset/logo usa.png";
    currencyName.innerText = "Dólar Americano";
    convertedValue.innerText = "US$ 0.00";
  }

  if (currencySelect.value === "euro") {
    currencyImg.src = "./Asset/logo euro.png";
    currencyName.innerText = "Euro";
    convertedValue.innerText = "€ 0.00";
  }

  // 👉 NOVA MOEDA
  if (currencySelect.value === "libra") {
    currencyImg.src = "./Asset/logo uk.png";
    currencyName.innerText = "Libra Esterlina";
    convertedValue.innerText = "£ 0.00";
  }
}

// 🔄 Converte valores

function convertValue() {
  const valorReal = Number(inputCurrency.value);

  if (isNaN(valorReal) || valorReal <= 0) {
    alert("Digite um valor válido");
    return;
  }

  valueToConvert.innerText = `R$ ${valorReal.toFixed(2)}`;

  if (currencySelect.value === "dolar") {
    convertedValue.innerText = `US$ ${(valorReal / dolarHoje).toFixed(2)}`;
  }

  if (currencySelect.value === "euro") {
    convertedValue.innerText = `€ ${(valorReal / euroHoje).toFixed(2)}`;
  }

  // 👉 NOVA MOEDA
  if (currencySelect.value === "libra") {
    convertedValue.innerText = `£ ${(valorReal / libraHoje).toFixed(2)}`;
  }
}

// EVENTOS
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);























